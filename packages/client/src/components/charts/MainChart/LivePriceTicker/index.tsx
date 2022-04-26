import React, { FC, useCallback } from 'react';
import { GenericChartComponent } from 'react-financial-charts';

interface Props {
  lastDatum: any
  width: number
}

const LivePriceTicker: FC<Props> = ({ width, lastDatum }) => {
  const render = useCallback(({
    chartConfig: { yScale },
  }: any) => {
    const y = yScale(lastDatum.close);
    const blockWidth = 70;
    const height = 22;
    return (
      <g>
        <line x1={0} y1={y} x2={width - blockWidth} y2={y} stroke="#009CCD" />
        <svg x={width - blockWidth} y={y - height / 2} width={blockWidth} height={height} viewBox={`0 0 ${blockWidth} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009CCD" d="M 10 0 H 52.5 V 22 H 10 L 0 11 Z" />
          <text fontFamily="Cabin" x="10" y={height / 2 + 2} fill="white" fontSize="8px">{lastDatum.close}</text>
        </svg>
      </g>
    );
  }, [lastDatum, width]);
  
  const renderCircle = useCallback(({
    chartConfig: { yScale },
    xAccessor,
    xScale,
  }: any) => {
    const y = yScale(lastDatum.close);
    const x = xScale(xAccessor(lastDatum));
    return (
      <g>
        <circle cx={x} cy={y} r="16" fill="#009CCD" opacity={0.34} />
        <circle cx={x} cy={y} r="8" stroke="var(--color-background)" strokeWidth="3" fill="#009CCD" />
      </g>
    );
  }, [lastDatum]);

  return (
    <>
      <GenericChartComponent clip={false} svgDraw={render} drawOn={['pan']} />
      <GenericChartComponent svgDraw={renderCircle} drawOn={['pan']} />
    </>
  );
};

export { LivePriceTicker };
