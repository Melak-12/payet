import { Home, List, MapPin, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center px-6 py-2 bg-emerald-500 rounded-lg">
          <Home className="w-6 h-6 text-white" />
          <span className="ml-2 text-white">HOME</span>
        </div>
        <List className="w-6 h-6 text-gray-600" />
        <MapPin className="w-6 h-6 text-gray-600" />
        <User className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
}