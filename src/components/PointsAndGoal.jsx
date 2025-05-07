import { BarChart2, CheckCircle, Star, XCircle } from "lucide-react";

export function PointsAndGoal({ currentPoints, pointsToNextCoupon }) {
    const totalPoints = pointsToNextCoupon;
    const progress = currentPoints / totalPoints;
    const percentage = Math.min(Math.round(progress * 100), 100); // Yüzde hesaplama
    const kalan = totalPoints - currentPoints

    return (
      <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            style={{
              width: `${percentage}%`,
              backgroundColor: "#10B981", // Tek bir yeşil renk
              transition: "width 0.5s ease", // Yavaşça dolma efekti
            }}
            className={`h-2 rounded-full ${
              percentage === 100 ? "animate-pulse" : "" // %100 olduğunda pulse efekti
            }`}
          />
        </div>
  
        {/* Puanlar */}
        <div className="flex justify-between items-center mt-4">
          {/* Toplanan Puan */}
          <div className="flex items-center text-blue-400">
            <Star size={20} />
            <span className="ml-2">{currentPoints}</span>
          </div>
  
          {/* Kalan Puan */}
          <div className="flex items-center text-red-400">
            <XCircle size={20} />
            <span className="ml-2">{kalan}</span>
          </div>
  
          {/* Toplam Puan */}
          <div className="flex items-center text-green-400">
            <CheckCircle size={20} />
            <span className="ml-2">{totalPoints}</span>
          </div>
        </div>
  
        {/* Yüzde ve İkonlar */}
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <BarChart2 size={16} />
            <span>{percentage}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Toplam: {totalPoints}</span>
          </div>
        </div>
      </div>
    );
  }
  