interface ServiceProps {
  icon: string;
  name: string;
}

const TransportationServices: ServiceProps[] = [
  {
    icon: "https://airhex.com/images/airline-logos/ethiopian-airlines.png",
    name: "Ethiopian Airlines",
  },
  {
    icon: "https://airhex.com/images/airline-logos/ethiopian-airlines.png",
    name: "Yegna Bus Ticket",
  },
];

const UtilityServices: ServiceProps[] = [
  {
    icon: "https://airhex.com/images/airline-logos/ethiopian-airlines.png",
    name: "ELPA",
  },
  {
    icon: "https://airhex.com/images/airline-logos/ethiopian-airlines.png",
    name: "Wuha Limat",
  },
  {
    icon: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=64&h=64&fit=crop",
    name: "EthioTelecom Com...",
  },
  {
    icon: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=64&h=64&fit=crop",
    name: "Safaricom Commu...",
  },
];

function ServiceItem({ icon, name }: ServiceProps) {
  return (
    <div className="flex  items-center space-x-1 gap-1 p-1 bg-white rounded-xl">
      <img src={icon} alt={name} className="w-10 h-10 rounded-full object-fill" />
      <span className="text-xs w-full  text-gray-800">{name}</span>
    </div>
  );
}

export default function PaymentSection() {
  return (
    <div className="px-6 mt-8">
      <h2 className="text-xl font-bold mb-2">PAY WITH <span className="text-emerald-500">PAYET</span></h2>
      
      <div className="mt-6">
        <h3 className="text-gray-500 mb-3 text-xs">TRANSPORTATION</h3>
        <div className="grid grid-cols-2 gap-4">
          {TransportationServices.map((service) => (
            <ServiceItem key={service.name} {...service} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-500 mb-3 text-xs">UTILITY</h3>
        <div className="grid grid-cols-2 gap-4">
          {UtilityServices.map((service) => (
            <ServiceItem key={service.name} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}