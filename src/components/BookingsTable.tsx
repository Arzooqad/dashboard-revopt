import type { Booking } from '../types';
import { statusClass } from '../constants/data';

interface BookingsTableProps {
  bookings: Booking[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function BookingsTable({
  bookings,
  searchQuery,
  onSearchChange,
}: BookingsTableProps) {
  return (
    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
            Recent Bookings
          </h2>
          <p className="text-[10px] text-slate-400">
            Live incoming guest reservations from all channels
          </p>
        </div>
        <input
          type="text"
          placeholder="Search guest, room, channel..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-48 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-[9px] text-slate-400 uppercase font-bold">
              <th className="py-2 px-2">Booking ID</th>
              <th className="py-2 px-2">Guest Name</th>
              <th className="py-2 px-2">Room Type</th>
              <th className="py-2 px-2">Nights</th>
              <th className="py-2 px-2">Rate/Night</th>
              <th className="py-2 px-2">Channel</th>
              <th className="py-2 px-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-2.5 px-2 font-mono text-[10px] text-slate-400">{b.id}</td>
                <td className="py-2.5 px-2">
                  <p className="font-bold text-slate-700">{b.guestName}</p>
                  <p className="text-[9px] text-slate-400">{b.time}</p>
                </td>
                <td className="py-2.5 px-2 text-slate-500 font-medium">{b.roomType}</td>
                <td className="py-2.5 px-2 font-semibold text-slate-600">{b.nights}n</td>
                <td className="py-2.5 px-2 font-bold text-slate-700">${b.ratePerNight}</td>
                <td className="py-2.5 px-2">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                    {b.channel}
                  </span>
                </td>
                <td className="py-2.5 px-2 text-center">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${statusClass(b.status)}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-400 text-xs">
                  No bookings match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
