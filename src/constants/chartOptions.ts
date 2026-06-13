import type { ChartOptions } from 'chart.js';

export const activityOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#fff',
      titleColor: '#1e293b',
      bodyColor: '#475569',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      padding: 10,
      boxPadding: 4,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { color: '#94a3b8', font: { size: 10 } },
    },
    y: {
      min: 0,
      max: 100,
      border: { display: false },
      grid: { color: '#f1f5f9' },
      ticks: { color: '#94a3b8', font: { size: 10 } },
    },
  },
};

export const velocityOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: {
      border: { display: false },
      grid: { color: '#f1f5f9' },
      ticks: { color: '#94a3b8', font: { size: 9 } },
    },
  },
};

export const channelOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: { label: (ctx) => ` ${ctx.raw}% of bookings` },
    },
  },
  scales: {
    x: {
      border: { display: false },
      grid: { color: '#f1f5f9' },
      ticks: { color: '#94a3b8', font: { size: 10 } },
    },
    y: {
      border: { display: false },
      grid: { display: false },
      ticks: { color: '#64748b', font: { size: 10, weight: 'bold' as const } },
    },
  },
};
