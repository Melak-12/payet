import { Plus, ArrowLeftRight, ArrowUpRight, ArrowDown } from 'lucide-react';

const actions = [
  { icon: Plus, label: 'DEPOSIT' },
  { icon: ArrowLeftRight, label: 'WITHDRAW' },
  { icon: ArrowUpRight, label: 'SEND' },
  { icon: ArrowDown, label: 'RECEIVE' },
];

export default function QuickActions() {
  return (
    <div className="px-6 mt-8">
      <h2 className="text-md font-bold text-gray-800 mb-4">QUICK ACTIONS</h2>
      <div className="grid grid-cols-4 gap-4">
        {actions.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center mb-2">
              <Icon className="w-5 h-5 text-gray-700" />
            </div>
            <span className="text-xs font-bold text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}