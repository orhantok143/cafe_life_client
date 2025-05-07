import {
  Gift,
  Clock3,
  CalendarCheck2,
  CalendarX2,
  CheckCircle2,
  XCircle,
  BadgePercent,
} from "lucide-react";
import { format, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";

export function CouponCard({ coupon }) {
  const now = new Date();
  const expiry = new Date(coupon.expiryDate);
  const earned = new Date(coupon.earnedDate);
  const expired = expiry < now;
  const timeLeft = formatDistanceToNowStrict(expiry, { locale: tr });

  const status = coupon.used
    ? "used"
    : expired
    ? "expired"
    : "active";

  const statusStyles = {
    active: {
      bg: "from-pink-400 via-purple-500 to-indigo-500",
      ring: "ring-2 ring-purple-400",
      text: "text-green-500",
      icon: <CheckCircle2 size={22} className="text-green-500" />,
    },
    used: {
      bg: "from-gray-300 via-gray-400 to-gray-500",
      ring: "ring-2 ring-gray-300",
      text: "text-gray-300",
      icon: <XCircle size={22} className="text-gray-300" />,
    },
    expired: {
      bg: "from-red-400 via-orange-400 to-yellow-300",
      ring: "ring-2 ring-red-300",
      text: "text-yellow-100",
      icon: <Clock3 size={22} className="text-yellow-100" />,
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <div
      className={`bg-gradient-to-r ${currentStyle.bg} p-4 rounded-lg transition-all duration-300 relative overflow-hidden`}
    >
      {/* Arka plan ikon */}
      <Gift
        className="absolute right-2 bottom-2 text-white/20"
        size={90}
        strokeWidth={1}
      />

      {/* Üst Satır */}
      <div className="flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <BadgePercent className="text-white drop-shadow" />
          <span className="text-lg font-bold drop-shadow text-white">
            #{coupon.code}
          </span>
        </div>
        <div className={`text-sm font-semibold flex items-center gap-1`}>
          {currentStyle.icon}
          <span className={`${currentStyle.text} font-medium`}>
            {status === "used"
              ? "Kullanıldı"
              : status === "expired"
              ? "Süresi Doldu"
              : "Aktif"}
          </span>
        </div>
      </div>

      {/* Tutar */}
      <div className="mt-3 text-4xl font-extrabold text-white drop-shadow-lg flex items-center gap-1">
        ₺{coupon.amount}
      </div>

      {/* Alt Bilgiler */}
      <div className="mt-2 text-sm space-y-1">
        <div className="flex items-center gap-2 text-white/80">
          <CalendarCheck2 size={16} />
          {format(earned, "d MMMM yyyy", { locale: tr })}
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <CalendarX2 size={16} />
          {format(expiry, "d MMMM yyyy", { locale: tr })}
        </div>
        {status === "active" && (
          <div className="flex items-center gap-2 text-white/90">
            <Clock3 size={16} />
            {timeLeft} kaldı
          </div>
        )}
      </div>
    </div>
  );
}
