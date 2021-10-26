import React, { FC, useEffect, useRef } from 'react';
import { Collapse } from '@option-blitz/libs/components/common/Collapse';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { lineChart } from './chart';
import styles from './styles.module.scss';
import { ProfitChartItem } from '../../../hooks/rightSidebar/useClassicSidebarHandlers';
import { useCollapse } from '../../../hooks/useCollapse';

interface Props {
  profitItems: ProfitChartItem[]
}

const width = 200;
const height = 155;

const ProfitChart: FC<Props> = ({ profitItems }) => {
  const profitChartRef = useRef<SVGSVGElement>(null);
  
  const {
    isActive,
    onChange,
  } = useCollapse();
  
  useEffect(() => {
    if (!isActive) return;
    lineChart({
      svgRef: profitChartRef, width, height, profitItems,
    });
  }, [profitChartRef, profitItems, isActive]);
  
  return (
    <div className={styles.wrap}>
      <Collapse
        className={styles.collapse}
        title={(
          <div className={styles.title_wrap}>
            <p>Payoff diagram</p>
            <FontIcon name={FontIconName.Checked} />
          </div>
        )}
        isActive={isActive}
        onClick={onChange}
      >
        <div className={styles.chart_wrap}>
          <p className={styles.left_chart_label}>Profit / Loss</p>
          <p className={styles.down_chart_label}>Price</p>
          <svg viewBox={`-5 15 ${width} ${height}`} className={styles.chart} ref={profitChartRef} />
        </div>
      </Collapse>
    </div>
  );
};

export { ProfitChart };
