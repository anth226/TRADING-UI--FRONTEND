import { ProfitChartItem } from '../../hooks/rightSidebar/useClassicSidebarHandlers';

export const profitItemsMock: ProfitChartItem[] = [
  {
    label: 'Trade Amount', price: 400, profitOrLose: -15, color: '#f43e12',
  },
  {
    label: 'Strike Price', price: 440, profitOrLose: -15, color: '#fa27f7',
  },
  {
    label: 'Break Even', price: 450, profitOrLose: 0, color: '#33f88b',
  },
  {
    label: 'Spot Price', price: 460, profitOrLose: 15, color: '#019cd7',
  },
  {
    label: 'TargetPrice', price: 470, profitOrLose: 30, color: '#ffde2e',
  },
];
