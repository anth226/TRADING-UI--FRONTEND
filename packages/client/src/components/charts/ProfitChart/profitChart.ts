import * as d3 from 'd3';
import { ProfitChartItem } from 'hooks/rightSidebar/useClassicSidebarHandlers';
import styles from './styles.module.scss';

interface Options {
  width?: number
  height?: number
  margin?: number
  svgRef?: React.RefObject<SVGSVGElement>
  profitItems?: ProfitChartItem[]
}

export const profitChart = ({
  width = 235,
  height = 235,
  margin = 25,
  svgRef,
  profitItems,
}: Options = {}) => {
  if (!svgRef?.current || !profitItems?.length) return;

  const xAxisLength = width - 2 * margin;
  const yAxisLength = height - 2 * margin;
  const minPrice = d3.min<ProfitChartItem, number>(profitItems, (d) => d.price)! - 15;
  const maxPrice = d3.max<ProfitChartItem, number>(profitItems, (d) => d.price)! + 15;
  const maxProfitOrLose = d3
    .max<ProfitChartItem, number>(profitItems, (d) => d.profitOrLose)! + 25;
  const minProfitOrLose = d3
    .min<ProfitChartItem, number>(profitItems, (d) => d.profitOrLose)! - 25;

  const svg = d3.select(svgRef?.current)
    .attr('width', width)
    .attr('height', height);

  const scaleX = d3.scaleLinear()
    .domain([minPrice, maxPrice])
    .range([0, xAxisLength]);

  const scaleY = d3.scaleLinear()
    .domain([maxProfitOrLose, minProfitOrLose])
    .range([0, yAxisLength]);

  const xAxis = d3.axisBottom(scaleX)
    .ticks(6)
    .tickPadding(6)
    .tickSize(0);
  const yAxis = d3.axisLeft(scaleY)
    .ticks(6)
    .tickPadding(6)
    .tickSize(0);

  svg.append('g')
    .attr('class', styles.x_axis)
    .attr('transform',
      `translate(${margin},${height - margin})`)
    .call(xAxis);

  svg.append('g')
    .attr('class', styles.y_axis)
    .attr('transform',
      `translate(${margin},${margin})`)
    .call(yAxis);

  d3.selectAll(`g.${styles.x_axis} g.tick`)
    .append('line')
    .classed(styles.gird_line_y, true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 0)
    .attr('y2', -(yAxisLength));
  
  d3.selectAll(`g.${styles.y_axis} g.tick`)
    .append('line')
    .classed(styles.gird_line_x, true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', xAxisLength)
    .attr('y2', 0);

  svg.append('g')
    .append('line')
    .attr('x1', scaleX(minPrice) + margin)
    .attr('y1', scaleY(0) + margin)
    .attr('x2', scaleX(maxPrice) + margin)
    .attr('y2', scaleY(0) + margin)
    .classed(styles.root_line, true);

  const line = d3.line<ProfitChartItem>()
    .x((d) => scaleX(d.price) + margin)
    .y((d) => scaleY(d.profitOrLose) + margin);

  svg.append('g').append('path')
    .attr('d', line(profitItems))
    .classed(styles.path, true);

  svg.append('g')
    .selectAll(styles.dot)
    .data(profitItems)
    .enter()
    .append('circle')
    .attr('class', styles.dot)
    .attr('r', 6)
    .attr('cx', (d: ProfitChartItem) => scaleX(d.price) + margin)
    .attr('cy', (d: ProfitChartItem) => scaleY(d.profitOrLose) + margin)
    .style('fill', (d: ProfitChartItem) => d.color);
};
