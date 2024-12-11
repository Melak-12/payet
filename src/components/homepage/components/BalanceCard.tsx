export default function BalanceCard() {
  return (
    <div className="mx-6 p-6 bg-emerald-500 rounded-3xl text-white relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-lg mb-2">Balance</p>
        <h1 className="text-2xl font-bold mb-2">12,000,34.00 ETB</h1>
        <p className="text-right text-xl">20%</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-50"></div>
    </div>
  );
}