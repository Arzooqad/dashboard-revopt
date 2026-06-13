import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

import { useLiveDashboard } from './hooks/useLiveDashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCards from './components/KpiCards';
import ActivityChart from './components/ActivityChart';
import VelocityChart from './components/VelocityChart';
import BookingsTable from './components/BookingsTable';
import ChannelChart from './components/ChannelChart';
import RateOptimizer from './components/RateOptimizer';

export default function App() {
  const {
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
    applyRateRecommendation,
    filteredBookings,
  } = useLiveDashboard();

  return (
    <div className="h-screen overflow-hidden bg-slate-50 flex flex-col md:flex-row text-slate-800 font-sans antialiased">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        <div className="flex-1 p-5 md:p-6 space-y-5 overflow-y-auto">
          <KpiCards
            occupancyRate={occupancyRate}
            adr={adr}
            revPAR={revPAR}
            totalRevenue={totalRevenue}
            roomsSold={roomsSold}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <ActivityChart chartData={activityChart} />
            <VelocityChart
              chartData={velocityChart}
              roomsSold={roomsSold}
              roomsAvailable={roomsAvailable}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <BookingsTable
              bookings={filteredBookings}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <div className="flex flex-col gap-4">
              <ChannelChart />
              <RateOptimizer rateApplied={rateApplied} onApply={applyRateRecommendation} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
