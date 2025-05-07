import { Coffee } from "lucide-react";
import CouponIndicator from "../utils/CouponIndicator";




export default function TopBar({ cafeName, tableNumber, couponProgress }) {

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py max-w-4xl mx-auto bg-gray-900" >
      <div className=" text-white p-3 flex justify-between items-center">
      {/* Sol: Logo ve Kafe İsmi */}
      <div className="flex items-center gap-2">
        <Coffee className="text-green-400" />
        <span className="text-sm font-semibold">{cafeName}</span>
      </div>

      {/* Sağ: Profil, Masa No, Kupon Progress */}
      <div className="flex items-center gap-4">
        <CouponIndicator current={90} total={100} />

        <div className="relative text-xs flex gap-1 items-center pl-2 border-gray-600">
          <div className="absolute right-1 -z-100 w-6 h-3 bg-orange-400 rounded-full animate-ping" />
          <div className="absolute right-1 -z-100 w-6 h-3 bg-orange-400 rounded-full animate-ping" />
          <div className="absolute right-1 -z-100 w-6 h-3 bg-orange-400 rounded-full animate-ping" />
          <div className="font-medium text-gray-300">S - {tableNumber}</div>
        </div>
      </div>
    </div>
   
    </div>
  );
}
