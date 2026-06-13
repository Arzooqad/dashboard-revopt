import { Bar } from 'react-chartjs-2';
import { CHANNEL_CHART_DATA } from '../constants/chartData';
import { channelOptions } from '../constants/chartOptions';

export default function ChannelChart() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex-1">
      <h2 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
        Bookings by Channel
      </h2>
      <p className="text-[10px] text-slate-400 mb-3">Where guests are booking from today</p>
      <div className="h-36">
        <Bar options={channelOptions} data={CHANNEL_CHART_DATA} />
      </div>
      <p className="text-[10px] text-slate-400 mt-2 border-t border-slate-100 pt-2">
        💡{' '}
        <span className="font-semibold text-slate-500">Direct bookings</span> have the highest
        profit margin (no OTA commission fees).
      </p>
    </div>
  );
}
