import type { Booking } from '../types';

export const TOTAL_ROOMS = 120;

export const ROOM_TYPES = [
  'Deluxe Double',
  'Executive Suite',
  'Standard Twin',
  'Family Room',
  'Penthouse',
];

export const GUEST_NAMES = [
  'James Anderson',
  'Emily Chen',
  'Liam Murphy',
  'Priya Sharma',
  'Carlos Ruiz',
  'Fatima Al-Hassan',
  'Noah Williams',
  'Sofia Bianchi',
];

export const CHANNELS: Booking['channel'][] = [
  'Direct',
  'Booking.com',
  'Expedia',
  'Airbnb',
  'Travel Agent',
];

export const STATUS_OPTIONS: Booking['status'][] = [
  'Confirmed',
  'Confirmed',
  'Confirmed',
  'Pending',
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BK-4201',
    time: '10:55 AM',
    guestName: 'James Anderson',
    roomType: 'Executive Suite',
    nights: 3,
    ratePerNight: 320,
    status: 'Confirmed',
    channel: 'Direct',
  },
  {
    id: 'BK-4202',
    time: '11:02 AM',
    guestName: 'Emily Chen',
    roomType: 'Deluxe Double',
    nights: 2,
    ratePerNight: 185,
    status: 'Confirmed',
    channel: 'Booking.com',
  },
  {
    id: 'BK-4203',
    time: '11:09 AM',
    guestName: 'Liam Murphy',
    roomType: 'Family Room',
    nights: 4,
    ratePerNight: 240,
    status: 'Pending',
    channel: 'Expedia',
  },
  {
    id: 'BK-4204',
    time: '11:14 AM',
    guestName: 'Priya Sharma',
    roomType: 'Standard Twin',
    nights: 1,
    ratePerNight: 110,
    status: 'Confirmed',
    channel: 'Airbnb',
  },
  {
    id: 'BK-4205',
    time: '11:18 AM',
    guestName: 'Carlos Ruiz',
    roomType: 'Penthouse',
    nights: 2,
    ratePerNight: 580,
    status: 'Confirmed',
    channel: 'Travel Agent',
  },
];

export const NAV_ITEMS = [
  { label: 'Dashboard', active: true },
];

export const ACTIVITY_LEGEND = [
  { label: 'Walk-in / Transient', color: 'bg-blue-400' },
  { label: 'Group Bookings', color: 'bg-red-400' },
  { label: 'Corporate Accounts', color: 'bg-orange-400' },
  { label: 'Complimentary Stays', color: 'bg-green-400' },
];

export function genId(): string {
  return `BK-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function timeNow(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function statusClass(status: Booking['status']): string {
  if (status === 'Confirmed') return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
  if (status === 'Pending') return 'bg-amber-50 text-amber-600 border border-amber-200';
  return 'bg-red-50 text-red-500 border border-red-200';
}
