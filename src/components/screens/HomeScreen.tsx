import BalanceCard from "../homepage/components/BalanceCard";
import BottomNav from "../homepage/components/BottomNav";
import Header from "../homepage/components/Header";
import PaymentSection from "../homepage/components/PaymentSection";
import QuickActions from "../homepage/components/QuickActions";


function DashboardScreen() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <div className='pb-24'>
        <BalanceCard />
        <QuickActions />
        <PaymentSection />
      </div>
      <BottomNav />
    </div>
  );
}

export default DashboardScreen;
