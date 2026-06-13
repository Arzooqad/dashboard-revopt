import { Line } from 'react-chartjs-2';
import { ACTIVITY_LEGEND } from '../constants/data';
import { activityOptions } from '../constants/chartOptions';

interface ActivityChartProps {
  chartData: typeof import('../constants/chartData').INITIAL_ACTIVITY_CHART;
}

export default function ActivityChart({ chartData }: ActivityChartProps) {
  return (
    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
            ALL BOOKING ACTIVITIES ON PLATFORM
          </h2>
          <p className="text-[10px] text-slate-400 mt-0.5">
            How many room nights each guest segment books throughout the day
          </p>
        </div>
        <span className="text-[9px] font-bold text-orange-500 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="h-64 w-full">
        <Line options={activityOptions} data={chartData} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-100 mt-3">
        {ACTIVITY_LEGEND.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${l.color}`} />
            <span className="text-[10px] text-slate-500 font-semibold">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
