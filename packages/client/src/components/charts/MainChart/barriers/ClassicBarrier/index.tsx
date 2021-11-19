import React, { FC, useCallback } from 'react';
import { GenericChartComponent } from 'react-financial-charts';

interface Props {
  value: number
  width: number
  isActive: boolean
}

const ClassicBarrier: FC<Props> = ({ width, value, isActive }) => {
  const render = useCallback(({ chartConfig: { yScale } }: any) => {
    const y = yScale(value);
    const blockWidth = 50;
    const height = 22;
    return (
      <g>
        <line x1={0} y1={y} x2={width - blockWidth} y2={y} stroke="#00CD86" />
        <svg x={width - blockWidth} y={y - height / 2} width={blockWidth} height={height} viewBox={`0 0 ${blockWidth} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00CD86" d="M 10 0 H 52.5 V 22 H 10 L 0 11 Z" />
          <text fontFamily="Cabin" x="10" y={height / 2 + 2} fill="white" fontSize="8px">{value}</text>
        </svg>

        <svg x={width / 2} y={y - height / 2} width={28} height={20} viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00CD86" d="M27 16V4C27 1.79086 25.2091 0 23 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H23C25.2091 20 27 18.2091 27 16Z" />
          <text fill="white" fontFamily="Cabin" fontSize={11} x={8} y={14}>TP</text>
        </svg>
      </g>
    );
  }, [width, value]);
  
  return (
    <>
      {isActive && <GenericChartComponent clip={false} svgDraw={render} drawOn={['pan']} />}
    </>
  );
};

export { ClassicBarrier };
