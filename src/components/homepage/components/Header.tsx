import { QrCode, Bell } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl">
        <QrCode className="w-6 h-6" />
      </div>
      <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl">
        <Bell className="w-6 h-6" />
      </div>
    </div>
  );
}