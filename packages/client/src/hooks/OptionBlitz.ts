import { OptionBlitzConnection, OptionBlitzConnectionOptionalParams } from './OptionBlitzConnection';
import { BlockPolledOptionBlitzStore } from './BlockPolledOptionBlitzStore';
import { OptionBlitzStore } from './OptionBlitzStore';

export class OptionBlitz {
  readonly store: OptionBlitzStore;

  readonly connection: OptionBlitzConnection;

  constructor(connecton: OptionBlitzConnection) {
    this.connection = connecton;
    this.store = new BlockPolledOptionBlitzStore(connecton) as OptionBlitzStore;
  }
}
