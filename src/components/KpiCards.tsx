import { TOTAL_ROOMS } from '../constants/data';

interface KpiCardsProps {
  occupancyRate: number;
  adr: number;
  revPAR: number;
  totalRevenue: number;
  roomsSold: number;
}

export default function KpiCards({
  occupancyRate,
  adr,
  revPAR,
  totalRevenue,
  roomsSold,
}: KpiCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] font-bold text-slate-900  uppercase tracking-wide">Occupancy Rate</p>
        <p className="text-[10px] text-slate-400 mt-0.5">% of rooms filled tonight</p>
        <p className="text-2xl font-extrabold text-slate-800 mt-2">{occupancyRate}%</p>
        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-orange-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${occupancyRate}%` }}
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-1">
          {roomsSold} of {TOTAL_ROOMS} rooms sold
        </p>
      </div>

      {/* ADR */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">
          Average Daily Rate (ADR)
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">Average price paid per room/night</p>
        <p className="text-2xl font-extrabold text-slate-800 mt-2">${adr.toFixed(2)}</p>
        <span className="inline-block text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded mt-1">
          Price-optimized
        </span>
      </div>

      {/* RevPAR */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">RevPAR</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Revenue per available room</p>
        <p className="text-2xl font-extrabold text-slate-800 mt-2">${revPAR}</p>
        <p className="text-[10px] text-slate-400 mt-1">= ADR × Occupancy%</p>
      </div>

      {/* Total Revenue */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">
          Today's Total Revenue
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">All room bookings combined</p>
        <p className="text-2xl font-extrabold text-slate-900 mt-2">
          ${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="text-[10px] text-orange-500 font-bold mt-1 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block" />
          Updating live
        </p>
      </div>
    </div>
  );
}
