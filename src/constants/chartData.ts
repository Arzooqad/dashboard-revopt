export const INITIAL_ACTIVITY_CHART = {
  labels: [
    '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM',
    '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM',
  ],
  datasets: [
    {
      label: 'Walk-in / Transient Guests',
      data: [8, 70, 85, 68, 5, 4, 7, 80, 55, 65, 58, 4, 8],
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(96, 165, 250, 0.15)',
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: 'Group Bookings (Conferences/Events)',
      data: [6, 50, 58, 46, 3, 2, 4, 52, 40, 45, 42, 2, 6],
      borderColor: '#f87171',
      backgroundColor: 'rgba(248, 113, 113, 0.12)',
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: 'Corporate Accounts',
      data: [4, 45, 52, 40, 2, 1, 3, 46, 35, 40, 36, 1, 4],
      borderColor: '#fb923c',
      backgroundColor: 'rgba(251, 146, 60, 0.15)',
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: 'Complimentary / Staff Stays',
      data: [2, 18, 20, 15, 1, 1, 1, 35, 22, 25, 22, 1, 2],
      borderColor: '#4ade80',
      backgroundColor: 'rgba(74, 222, 128, 0.18)',
      fill: true,
      tension: 0.35,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

export const INITIAL_VELOCITY_CHART = {
  labels: Array.from({ length: 30 }, (_, i) => `${30 - i}s`),
  datasets: [
    {
      label: 'Booking Requests / min',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 18) + 6),
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

export const CHANNEL_CHART_DATA = {
  labels: ['Direct', 'Booking.com', 'Expedia', 'Airbnb', 'Travel Agent'],
  datasets: [
    {
      label: 'Bookings by Channel (Today)',
      data: [38, 27, 18, 9, 8],
      backgroundColor: [
        'rgba(251, 146, 60, 0.80)',
        'rgba(96, 165, 250, 0.70)',
        'rgba(248, 113, 113, 0.70)',
        'rgba(74, 222, 128, 0.70)',
        'rgba(167, 139, 250, 0.70)',
      ],
      borderRadius: 6,
      borderWidth: 0,
    },
  ],
};
