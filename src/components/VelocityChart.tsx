import { Line } from 'react-chartjs-2';
import { velocityOptions } from '../constants/chartOptions';

interface VelocityChartProps {
  chartData: typeof import('../constants/chartData').INITIAL_VELOCITY_CHART;
  roomsSold: number;
  roomsAvailable: number;
}

export default function VelocityChart({ chartData, roomsSold, roomsAvailable }: VelocityChartProps) {
  const requestsNow = chartData.datasets[0].data[29];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-3">
      <div>
        <h2 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
          Live Booking Requests
        </h2>
        <p className="text-[10px] text-slate-400 mt-0.5">
          Number of booking requests arriving each second
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex-1">
        <div className="h-28">
          <Line options={velocityOptions} data={chartData} />
        </div>

        {/* Mini stats row */}
        <div className="flex justify-between mt-3 pt-2 border-t border-slate-100 text-[10px]">
          <div>
            <p className="text-slate-400 font-bold uppercase text-[8px]">Requests Now</p>
            <p className="font-extrabold text-slate-700">{requestsNow} / min</p>
          </div>
          <div>
            <p className="text-slate-400 font-bold uppercase text-[8px]">Response Time</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-10 bg-slate-200 h-1.5 rounded-full">
                <div className="bg-cyan-500 h-full rounded-full w-5" />
              </div>
              <span className="font-bold text-slate-600">3.9ms</span>
            </div>
          </div>
          <div>
            <p className="text-slate-400 font-bold uppercase text-[8px]">Queue Depth</p>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="w-10 bg-slate-200 h-1.5 rounded-full">
                <div className="bg-orange-400 h-full rounded-full w-2" />
              </div>
              <span className="font-bold text-slate-600">0 pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Room availability summary */}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-wide mb-1">
          Tonight's Availability
        </p>
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Rooms Sold</span>
          <span className="font-bold text-slate-700">{roomsSold}</span>
        </div>
        <div className="flex justify-between text-xs mt-0.5">
          <span className="text-slate-500">Still Available</span>
          <span className="font-bold text-orange-600">{roomsAvailable}</span>
        </div>
      </div>
    </div>
  );
}
