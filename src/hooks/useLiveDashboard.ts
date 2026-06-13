import { useState, useEffect, useMemo } from 'react';
import type { Booking } from '../types';
import {
  INITIAL_BOOKINGS,
  GUEST_NAMES,
  ROOM_TYPES,
  CHANNELS,
  STATUS_OPTIONS,
  genId,
  pick,
  timeNow,
  TOTAL_ROOMS,
} from '../constants/data';
import { INITIAL_ACTIVITY_CHART, INITIAL_VELOCITY_CHART } from '../constants/chartData';

export function useLiveDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [rateApplied, setRateApplied] = useState(false);

  const [occupancyRate, setOccupancyRate] = useState(74.2);
  const [adr, setAdr] = useState(248.5);
  const [totalRevenue, setTotalRevenue] = useState(48_250.0);
  const [roomsAvailable, setRoomsAvailable] = useState(32);

  const [activityChart, setActivityChart] = useState(INITIAL_ACTIVITY_CHART);
  const [velocityChart, setVelocityChart] = useState(INITIAL_VELOCITY_CHART);

  const revPAR = useMemo(
    () => +(adr * (occupancyRate / 100)).toFixed(2),
    [adr, occupancyRate],
  );
  const roomsSold = useMemo(
    () => Math.round((occupancyRate / 100) * TOTAL_ROOMS),
    [occupancyRate],
  );

  function applyRateRecommendation() {
    setRateApplied(true);
    setAdr((prev) => +(prev + 15).toFixed(2));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupancyRate((prev) =>
        Math.min(100, Math.max(40, +(prev + (Math.random() * 0.6 - 0.28)).toFixed(1))),
      );
      setAdr((prev) =>
        Math.max(80, +(prev + (Math.random() * 1.4 - 0.6)).toFixed(2)),
      );
      setRoomsAvailable((prev) =>
        Math.max(0, Math.min(TOTAL_ROOMS, prev + (Math.random() > 0.6 ? -1 : 1))),
      );

      if (Math.random() > 0.55) {
        const ratePerNight = Math.floor(Math.random() * 300) + 100;
        const nights = Math.floor(Math.random() * 4) + 1;
        const newBooking: Booking = {
          id: genId(),
          time: timeNow(),
          guestName: pick(GUEST_NAMES),
          roomType: pick(ROOM_TYPES),
          nights,
          ratePerNight,
          status: pick(STATUS_OPTIONS),
          channel: pick(CHANNELS),
        };
        setBookings((prev) => [newBooking, ...prev.slice(0, 6)]);
        setTotalRevenue((prev) => prev + ratePerNight * nights);
      }

      setActivityChart((prev) => ({
        ...prev,
        datasets: prev.datasets.map((ds) => ({
          ...ds,
          data: ds.data.map((v, i) =>
            i === 2 || i === 7
              ? Math.min(100, Math.max(0, v + (Math.random() > 0.5 ? 1 : -1)))
              : v,
          ),
        })),
      }));

      setVelocityChart((prev) => {
        const newData = [
          ...prev.datasets[0].data.slice(1),
          Math.floor(Math.random() * 18) + 6,
        ];
        return { ...prev, datasets: [{ ...prev.datasets[0], data: newData }] };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredBookings = useMemo(
    () =>
      bookings.filter(
        (b) =>
          b.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.roomType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.channel.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [bookings, searchQuery],
  );

  return {
    searchQuery,
    setSearchQuery,
    rateApplied,
    occupancyRate,
    adr,
    totalRevenue,
    roomsAvailable,
    revPAR,
    roomsSold,
    activityChart,
    velocityChart,
    filteredBookings,
    applyRateRecommendation,
  };
}
