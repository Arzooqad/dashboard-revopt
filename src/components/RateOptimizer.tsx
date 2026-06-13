interface RateOptimizerProps {
  rateApplied: boolean;
  onApply: () => void;
}

export default function RateOptimizer({ rateApplied, onApply }: RateOptimizerProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <span>💡</span>
        <h2 className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
          Rate Optimizer
        </h2>
      </div>
      <p className="text-[10px] text-slate-400 mb-3">AI-powered room rate recommendation</p>

      <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-700">Deluxe Double Room</span>
          <span className="text-[9px] font-bold text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">
            Demand Spike
          </span>
        </div>
        <p className="text-[10px] text-slate-500 italic">
          "Weekend demand is 22% above average. Raising rate will increase revenue without reducing
          bookings."
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded border border-slate-100 p-2 text-center">
            <p className="text-[8px] font-bold text-slate-400 uppercase">Current Rate</p>
            <p className="text-sm font-bold text-slate-500 line-through">$185</p>
          </div>
          <div className="bg-white rounded border border-orange-100 p-2 text-center">
            <p className="text-[8px] font-bold text-orange-500 uppercase">Suggested Rate</p>
            <p className="text-sm font-extrabold text-orange-600">$215</p>
          </div>
        </div>
      </div>

      <div className="mt-3">
        {rateApplied ? (
          <div className="w-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold py-2 rounded-lg text-center">
            ✓ New Rate Applied Successfully
          </div>
        ) : (
          <button
            onClick={onApply}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 rounded-lg transition-colors shadow-sm shadow-orange-400/20"
          >
            Apply Rate Recommendation
          </button>
        )}
      </div>
    </div>
  );
}
