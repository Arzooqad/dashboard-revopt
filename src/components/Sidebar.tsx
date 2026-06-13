import { NAV_ITEMS, TOTAL_ROOMS } from '../constants/data';


export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 md:h-screen bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col flex-shrink-0 overflow-hidden">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-slate-100 gap-3">
        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow shadow-orange-400/30">
          R
        </div>
        <div>
          <p className="font-bold text-slate-900 text-sm leading-tight">RevOpt Dashboard</p>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">
            Hospitality Revenue
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all text-left ${item.active
              ? 'bg-orange-50 text-orange-600 pl-2.5'
              : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 bg-slate-50">
        <p className="text-xs font-bold text-slate-700">shrimaya Hotel</p>
        <p className="text-[10px] text-slate-400 mt-0.5">{TOTAL_ROOMS} Total Rooms · 4-Star Property</p>
      </div>
    </aside>
  );
}
