import React, { FC } from 'react';
import { GenericChartComponent } from 'react-financial-charts';

interface Props {
  width: number
  callValue: number
  putValue: number
}

const TouchBarrier: FC<Props> = ({ width, callValue, putValue}) => {
  const renderPut = ({ chartConfig: { yScale } }: any) => {
    const y = yScale(putValue);
    const blockWidth = 50;
    
    return (
      <>
        <line x1={0} y1={y} x2={width - blockWidth} y2={y} stroke="#F08F1C" strokeDasharray={5} />
        <svg x={width - blockWidth} y={y} width={blockWidth} height="14" viewBox={`"0 0 ${blockWidth} 14"`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F08F1C" d="M13.0873 14H44.5C45.6046 14 46.5 13.1046 46.5 12V0H0L9.10121 12.0185C10.0464 13.2666 11.5216 14 13.0873 14Z" />
          <text fontFamily="Cabin" x="10" y="10" fill="white" fontSize="8px">{putValue}</text>
        </svg> 
      </>
    );
  };

  const renderCall = ({ chartConfig: { yScale } }: any) => {
    const y = yScale(callValue);
    const blockWidth = 50;

    return (
      <>
        <line x1={0} y1={y} x2={width - blockWidth} y2={y} stroke="#F08F1C" strokeDasharray={5} />
        <svg x={width - blockWidth} y={y - 14} width={blockWidth} height="14" viewBox={`"0 0 ${blockWidth} 14"`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F08F1C" d="M13.0873 0H44.5C45.6046 0 46.5 0.895431 46.5 2V14H0L9.10121 1.98149C10.0464 0.733355 11.5216 0 13.0873 0Z" />
          <text fontFamily="Cabin" x="10" y="10" fill="white" fontSize="8px">{callValue}</text>
        </svg>
      </>
    );
  };
  
  return (
    <>
      <GenericChartComponent clip={false} svgDraw={renderPut} drawOn={['pan']} />
      <GenericChartComponent clip={false} svgDraw={renderCall} drawOn={['pan']} />
    </>
  );
};

export { TouchBarrier };
