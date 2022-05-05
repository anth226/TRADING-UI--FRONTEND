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
          <path d="M8.10907 1.68952C9.05817 0.61525 10.4227 0 11.8562 0H52.5C54.7091 0 56.5 1.79086 56.5 4V18C56.5 20.2091 54.7091 22 52.5 22H11.5878C10.3122 22 9.08489 21.5125 8.15698 20.6372L1.11237 13.9925C-0.0652297 12.8817 -0.149212 11.037 0.92259 9.82384L8.10907 1.68952Z" fill="#009CCD" />
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
