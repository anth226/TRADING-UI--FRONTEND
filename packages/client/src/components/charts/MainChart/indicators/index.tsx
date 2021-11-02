import React from 'react';
import {
  Chart,
  XAxis,
  YAxis,
  MouseCoordinateX,
  MouseCoordinateY,
  LineSeries,
  SingleValueTooltip,
  atr,
} from 'react-financial-charts';
import { format, timeFormat } from 'd3';

export const getAtrIndicator = (atr14: ReturnType<typeof atr>) => (
  <Chart
    id={8}
    yExtents={atr14.accessor()}
    height={125}
    origin={(w, h) => [0, h - 125]}
    padding={{ top: 10, bottom: 10 }}
  >
    <XAxis axisAt="bottom" orient="bottom" />
    <YAxis axisAt="right" orient="right" ticks={2} />

    <MouseCoordinateX
      at="bottom"
      orient="bottom"
      displayFormat={timeFormat('%Y-%m-%d')}
    />
    <MouseCoordinateY
      at="right"
      orient="right"
      displayFormat={format('.2f')}
    />

    <LineSeries yAccessor={atr14.accessor()} strokeStyle={atr14.stroke()} />
    <SingleValueTooltip
      yAccessor={atr14.accessor()}
      yLabel={`ATR (${atr14.options().windowSize})`}
      yDisplayFormat={format('.2f')}
      origin={[-40, 15]}
    />
  </Chart>
);
