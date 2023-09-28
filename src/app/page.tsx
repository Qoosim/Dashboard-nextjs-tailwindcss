import Header from './components/Header';
import TopCard from './components/TopCard';
import BarChart from './components/BarChart';
import RecentOrders from './components/RecentOrders';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCard />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  )
}
