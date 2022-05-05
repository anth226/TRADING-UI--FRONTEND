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
    const blockWidth = 70;
    const height = 22;
    return (
      <g>
        <line x1={0} y1={y} x2={width - blockWidth} y2={y} stroke="#00CD86" />
        <svg x={width - blockWidth} y={y - height / 2} width={blockWidth} height={height} viewBox={`0 0 ${blockWidth} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.10907 1.68952C9.05817 0.61525 10.4227 0 11.8562 0H52.5C54.7091 0 56.5 1.79086 56.5 4V18C56.5 20.2091 54.7091 22 52.5 22H11.5878C10.3122 22 9.08489 21.5125 8.15698 20.6372L1.11237 13.9925C-0.0652297 12.8817 -0.149212 11.037 0.92259 9.82384L8.10907 1.68952Z" fill="#00CD86" />
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
