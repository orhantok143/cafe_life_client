import { CouponsList } from "./CouponsList";
import { PointsAndGoal } from "./PointsAndGoal";

export function Rewards({ currentPoints, pointsToNextCoupon, coupons }) {
    return (
      <div className="space-y-4 bg-gray-900 min-h-screen">
        {/* Puan Durumu */}
        <PointsAndGoal
          currentPoints={currentPoints}
          pointsToNextCoupon={pointsToNextCoupon}
        />
  
        {/* Kazanılan Kuponlar */}
        <div className="text-xl font-semibold text-gray-300 pb-2 border-b-1 border-gray-100/30">Kuponlarım</div>
        <CouponsList coupons={coupons} />
      </div>
    );
  }
  