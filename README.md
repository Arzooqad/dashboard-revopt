# 📊 Revenue Optimization Dashboard

A real-time hotel revenue management dashboard built with **React 19**, **TypeScript**, and **Tailwind CSS**. It simulates a live property, streaming KPI updates, new bookings, and chart data every few seconds — giving hotel managers an at-a-glance view of occupancy, pricing, and revenue performance.

---

## ✨ Features

- **Live KPI Cards** — Occupancy Rate, Average Daily Rate (ADR), RevPAR, and Today's Total Revenue update automatically every 3 seconds.
- **Booking Activity Chart** — Bar chart showing room activity trends across time slots.
- **Booking Velocity Chart** — Line chart tracking the pace at which bookings are being made.
- **Channel Distribution Chart** — Doughnut chart breaking down bookings by acquisition channel (Direct, OTA, Corporate, etc.).
- **Bookings Table** — A searchable, live-updating table of recent bookings with guest name, room type, nights, rate, status, and channel.
- **Rate Optimizer** — A one-click rate recommendation panel that applies a pricing adjustment (+$15 ADR) and reflects the change across all metrics in real time.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ActivityChart.tsx     # Bar chart – daily booking activity
│   ├── BookingsTable.tsx     # Searchable live bookings table
│   ├── ChannelChart.tsx      # Doughnut chart – channel distribution
│   ├── Header.tsx            # Top navigation bar
│   ├── KpiCards.tsx          # KPI metric cards (Occupancy, ADR, RevPAR, Revenue)
│   ├── RateOptimizer.tsx     # Rate recommendation widget
│   ├── Sidebar.tsx           # Left navigation sidebar
│   └── VelocityChart.tsx     # Line chart – booking velocity
├── constants/
│   ├── chartData.ts          # Initial seed data for charts
│   └── data.ts               # Booking seed data, constants & helpers
├── hooks/
│   └── useLiveDashboard.ts   # Core state & simulation logic (setInterval)
├── types/
│   └── index.ts              # TypeScript interfaces (Booking, etc.)
├── App.tsx                   # Root layout – assembles all components
└── main.tsx                  # React entry point
```

---

## ⚙️ How It Works

### Live Data Simulation (`useLiveDashboard`)

All real-time behaviour is driven by a single custom hook — [`useLiveDashboard`](./src/hooks/useLiveDashboard.ts). It runs a `setInterval` every **3 seconds** that:

1. **Fluctuates KPIs** — Occupancy Rate and ADR drift randomly within realistic bounds. RevPAR and Rooms Sold are derived values computed with `useMemo`.
2. **Generates new bookings** — With ~45% probability per tick, a new booking with a random guest, room type, channel, and rate is prepended to the bookings list.
3. **Updates charts** — Activity chart data points shift slightly; velocity chart scrolls forward by one data point, simulating a rolling window.

### Rate Optimizer

Clicking **Apply Recommendation** in the Rate Optimizer panel calls `applyRateRecommendation()`, which increments the ADR by $15. Because RevPAR is computed as `ADR × Occupancy%`, both metrics update immediately across the dashboard.

### Search & Filtering

The bookings table uses a `useMemo`-derived `filteredBookings` array that re-filters on every keystroke against guest name, booking ID, room type, and channel.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Yarn

### Install & Run

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
yarn build
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Chart.js + react-chartjs-2 | Data visualizations |
| Yarn | Package manager |

---

## 📄 License

MIT
