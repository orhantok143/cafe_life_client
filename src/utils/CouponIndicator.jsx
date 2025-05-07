import { useState } from "react";
import { Bookmark, Ticket } from "lucide-react";

export default function CouponIndicator({ current, total }) {
  const [showDetail, setShowDetail] = useState(false);
  const percentage = Math.floor((current / total) * 100);

  return (
  
      <div className="relative ">
        {/* Titreşen ikon */}
    <div className="flex items-center justify-center">
     
    <button
        onClick={() => setShowDetail(!showDetail)}
        className="text-green-400"
      >
        <Bookmark size={22} />
      </button>

      {/* Açılır detay kutusu sadece tıklanınca gösterilir */}
      {showDetail && (
        <div className="absolute z-60 right-1 mt-12 w-50 bg-gray-700 p-3 rounded shadow-lg">
     
          <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
            <div
              className="bg-green-500 h-2 transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
          {/* <div className="text-xs text-right text-gray-300">
            {current}/{total} (%{percentage})
          </div> */}
        </div>
      )}
      </div>  
      </div>
  );
}
