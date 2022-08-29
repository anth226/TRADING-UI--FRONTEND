import { EventEmitter } from 'events';

const wsEndpoint: Record<string, string> = {
  crypto: 'wss://optionblitz-dev.us-east-1.elasticbeanstalk.com/crypto/d74687c3e0a1ad96674f7e53b9a81a7dd6e87b35',
  // this shows trade(most likely forex equivalent as the volume seems to be very low)
  // forex: "wss://optionblitz-dev.us-east-1.elasticbeanstalk.com/crypto/d74687c3e0a1ad96674f7e53b9a81a7dd6e87b35",
  // this shows bid/ask
  forex: 'wss://optionblitz-dev.us-east-1.elasticbeanstalk.com/forex/d74687c3e0a1ad96674f7e53b9a81a7dd6e87b35',
};

type PricefeedCategory = 'crypto' | 'forex';

interface OptionBlitzPriceSubscription {
  event: EventEmitter;
  subCount: number;
}

function normalizeSymbol(symbol: string) {
  const normalized = symbol?.replace(/[/_]/g, '');
  return normalized;
}
function toFinageSymbol(symbol: string, category:string) {
  if (category === 'forex') {
    const converted = symbol?.replace(/[_]/g, '/');
    return converted;
  }
  if (category === 'crypto') {
    return symbol?.replace(/[/_]/g, '');
  }
}
function getAuthenticatedUrl(category: string): string {
  return wsEndpoint[category];
}

export class OptionBlitzPricefeed {
  private _ws: Record<string, WebSocket> = {};

  private _subscriptions: Record<string, OptionBlitzPriceSubscription> = {};

  public start(): () => void {
    const doStop = this._doStart();

    return () => {
      doStop();
    };
  }

  public async subscribe(category: PricefeedCategory, symbols: string[]) {
    return this._subscribe(category, symbols);
  }

  public async unSubscribe(category: PricefeedCategory, symbols: string[]) {
    return this._unSubscribe(category, symbols);
  }

  public async on(symbol: string, listener: (...args: any[]) => void) {
    const emitter = this._subscriptions[normalizeSymbol(symbol)];
    if (emitter) {
      emitter.event.on(normalizeSymbol(symbol), listener);
    }
  }

  public async off(symbol: string, listener: (...args: any[]) => void) {
    const emitter = this._subscriptions[normalizeSymbol(symbol)];
    if (emitter) {
      emitter.event.off(normalizeSymbol(symbol), listener);
    }
  }

  public async once(symbol: string, listener: (...args: any[]) => void) {
    const emitter = this._subscriptions[normalizeSymbol(symbol)];
    if (emitter) {
      emitter.event.once(normalizeSymbol(symbol), listener);
    }
  }

  protected async _subscribe(category: PricefeedCategory, symbols: string[]): Promise<() => void> {
    const socket = this._ws[category] || this._connect(getAuthenticatedUrl(category), category);
    if (socket != this._ws[category]) {
      try {
        this._ws[category]?.close();
      } catch (e) {

      }
      this._ws[category] = socket;
    }
    const _this = this;
    const newSymbols = symbols.filter((s) => !this._subscriptions[normalizeSymbol(s)]);
    this._addSubscriptions(symbols);

    await this._sendMessage(socket,
      JSON.stringify(
        {
          action: 'subscribe',
          symbols: newSymbols.map((s) => toFinageSymbol(s, category)).join(','),
        },
      ));
    return async () => {
      _this._unSubscribe(category, symbols);
    };
  }

  protected async _unSubscribe(category: PricefeedCategory, symbols: string[]): Promise<void> {
    const socket = this._ws[category];
    if (!socket || socket.readyState != socket.OPEN) return;
    const removedSymbols = this._removedSubscriptions(symbols);

    if (removedSymbols.length > 0) {
      await this._sendMessage(socket,
        JSON.stringify(
          {
            action: 'unsubscribe',
            symbols: removedSymbols.map((s) => toFinageSymbol(s, category)).join(','),
          },
        ));    
    }
  }

  protected _addSubscriptions(symbols: string[]) {
    symbols.forEach((s) => {
      if (!this._subscriptions[normalizeSymbol(s)]) {
        this._subscriptions[normalizeSymbol(s)] = {
          event: new EventEmitter(),
          subCount: 0,
        };
      }
      this._subscriptions[normalizeSymbol(s)].subCount += 1;
    });
  }

  protected _removeSubscriptions(symbols: string[]) {
    symbols.forEach((s) => {
      const sub = this._subscriptions[normalizeSymbol(s)];
      if (sub && sub.subCount == 1) {
        sub.event.removeAllListeners();
        delete this._subscriptions[normalizeSymbol(s)];
      }
    });
  }

  protected _removedSubscriptions(symbols: string[]): string[] {
    const removeSymbols = symbols.filter((s) => this._subscriptions[normalizeSymbol(s)]?.subCount == 1);
    return removeSymbols;
  }

  protected async _sendMessage(socket: WebSocket, msg: string) {
    if (socket.readyState == socket.CLOSED
            || socket.readyState == socket.CLOSING) {
      throw new Error('socket closed');
    }
    if (socket.readyState !== socket.OPEN) {
      try {
        await this._waitForConnection(socket);
        socket.send(msg);
      } catch (err) {
        console.error(err);
        throw err;
      }
    } else {
      socket.send(msg);
    }
  }

  protected _waitForConnection = async (socket: WebSocket): Promise<void> => new Promise((resolve, reject) => {
    const maxNumberOfAttempts = 10;
    const intervalTime = 500; // ms

    let currentAttempt = 0;
    const interval = setInterval(() => {
      if (currentAttempt > maxNumberOfAttempts - 1) {
        clearInterval(interval);
        reject(new Error('Maximum number of attempts exceeded'));
      } else if (socket.readyState === socket.OPEN) {
        clearInterval(interval);
        resolve();
      } else if (socket.readyState == socket.CLOSED || socket.readyState == socket.CLOSING) {
        reject(new Error('socket closed'));
      }
      currentAttempt += 1;
    }, intervalTime);
  });

  protected _connect(url: string, category: string) {
    const socket = new WebSocket(url);
    socket.onopen = ((evt) => {
      console.log(`socket ${socket.readyState == socket.OPEN ? 'opened' : 'opening'}`, evt);
    });
    socket.onmessage = ((evt) => {
      // console.log(evt);
      this._processMessage(evt, category);
    });
    socket.onerror = ((evt) => {
      console.log('socket error', evt);
    });
    socket.onclose = ((evt) => {
      console.log('socket closed', evt);
    });
    return socket;
  }

  protected _processMessage(evt: MessageEvent, category: string) {
    const { data: dataJSON, origin } = evt;
    const data = JSON.parse(dataJSON);
    if (category === 'crypto') {
      const {
        s: symbol, p: price, q: quantity, t: timestamp, 
      } = data;
      if (symbol) {
        const eventEmitter = this._subscriptions[normalizeSymbol(symbol)];
        eventEmitter?.event.emit(normalizeSymbol(symbol), {
          symbol: normalizeSymbol(symbol),
          price,
          quantity,
          timestamp,
        });
      }
    } else if (category === 'forex') {
      const {
        s: symbol, b: bid, a: ask, dc: delta, dd, ppms, t: timestamp, 
      }: { s: string, b: number, a: number, dc: number, dd:number, ppms:boolean, t: number } = data;
      if (symbol) {
        const eventEmitter = this._subscriptions[normalizeSymbol(symbol)];
        eventEmitter?.event.emit(normalizeSymbol(symbol), {
          symbol: normalizeSymbol(symbol),
          bid,
          // quote: (bid + ask) / 2,
          ask,
          // delta,
          timestamp,
        });
      }
    }
  }

  protected _openSocket(category: string) {
    this._ws[category] = this._connect(getAuthenticatedUrl(category), category);
    return this._ws[category];
  }

  protected _closeSocket(socket: WebSocket, category?: string) {
    if (socket.readyState == socket.OPEN) {
      socket.close();
    } else {
      console.log('socket already closed');
    }
        
    if (category && this._ws[category] === socket) {
      delete this._ws[category];
    }
  }

  protected _doStart(): () => void {
    console.log('start pricefeed');
    const wsCryto = this._openSocket('crypto');
    const wsForex = this._openSocket('forex');
    const _this = this;
    return () => {
      console.log('closing socket');
      _this._closeSocket(wsCryto, 'crypto');
      _this._closeSocket(wsForex, 'forex');
    };
  }
}

export const priceFeed = new OptionBlitzPricefeed();

// priceFeed.start();
// priceFeed.subscribeCrypto([]);
// priceFeed.subscribe("forex", ["GBP/USD", "XAU/USD"]);
