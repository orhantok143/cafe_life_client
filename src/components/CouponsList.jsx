import { CouponCard } from "./CouponCard";

export function CouponsList({ coupons }) {
    return (
      <div className="mt-4 space-y-4">
        {coupons.map((coupon,index ) => (
          <CouponCard key={index} coupon={coupon}/>
        ))}
      </div>
    );
  }
  