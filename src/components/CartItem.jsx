import { useState, useEffect } from "react";
import {
  ChevronRight,
  Minus,
  Plus,
  Trash2,
  Clock,
  Loader,
  CheckCircle2,
  XCircle,
  ShoppingCart,
  CircleX,
} from "lucide-react";

const statusThemes = {
  beklemede: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-400/50",
    text: "text-yellow-400",
    icon: <Clock className="w-4 h-4" />,
    label: "Beklemede",
  },
  hazırlanıyor: {
    bg: "bg-blue-500/10",
    border: "border-blue-400/50",
    text: "text-blue-400",
    icon: <Loader className="w-4 h-4 animate-spin" />,
    label: "Hazırlanıyor",
  },
  hazır: {
    bg: "bg-green-500/10",
    border: "border-green-400/50",
    text: "text-green-400",
    icon: <CheckCircle2 className="w-4 h-4" />,
    label: "Hazır",
  },
  "teslim edildi": {
    bg: "bg-gray-500/10",
    border: "border-gray-400/50",
    text: "text-gray-400",
    icon: <CheckCircle2 className="w-4 h-4" />,
    label: "Teslim Edildi",
  },
  iptal: {
    bg: "bg-red-500/10",
    border: "border-red-400/50",
    text: "text-red-400",
    icon: <XCircle className="w-4 h-4" />,
    label: "İptal Edildi",
  },
  "sipariş verildi": {
    bg: "bg-purple-500/10",
    border: "border-purple-400/50",
    text: "text-purple-400",
    icon: <ShoppingCart className="w-4 h-4" />,
    label: "Sipariş Verildi",
  },
  "sipariş veriliyor": {
    bg: "bg-purple-500/10",
    border: "border-purple-400/50",
    text: "text-purple-400",
    icon: <ShoppingCart className="w-4 h-4" />,
    label: "Sipariş Veriliyor",
  },
};

export const CartItem = ({ item, onIncrease, onDecrease, onStatusChange }) => {
  const [cancelCountdown, setCancelCountdown] = useState(30);
  const [message, setMessage] = useState("");
  const isLocked = [
    "beklemede",
    "hazırlanıyor",
    "hazır",
    "teslim edildi",
    "iptal",
    "sipariş verildi",
    "sipariş veriliyor",
  ].includes(item.status);

  const theme = statusThemes[item.status] || {};

  const handleDelete = () => {
    console.log("Ürün silindi.");
  };

  useEffect(() => {
    if (item.status === "sipariş veriliyor" && cancelCountdown > 0) {
      const interval = setInterval(() => {
        setCancelCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (item.status === "sipariş veriliyor" && cancelCountdown === 0) {
      onStatusChange(item.id, "sipariş verildi");
      setMessage("Sipariş başarıyla iletildi");
    }
  }, [item.status, cancelCountdown]);

  useEffect(() => {
    if (item.status === "sipariş verildi") {
      const timeout = setTimeout(() => {
        setMessage("");
        onStatusChange(item.id, "beklemede");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [item.status]);

  const cancelable = cancelCountdown > 0;

  return (
    <div
      className={`p-3 rounded-xl transition-all shadow-md bg-gray-800 mb-2 ${theme.bg} border ${theme.border}`}
    >
      {message && (
        <div className="mb-2 text-sm text-white bg-green-700 rounded-md px-3 py-1 text-center shadow">
          {message}
        </div>
      )}

      <div
        className={`flex justify-between items-center gap-3 ${
          isLocked ? "opacity-60 pointer-events-none select-none" : ""
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 rounded-xl object-cover shadow-sm"
        />

        <div className="flex flex-col justify-between flex-1">
          <h3 className="text-gray-200 text-base font-semibold">
            {item.title}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-400">
            <span>{item.category}</span>
            <ChevronRight className="w-4 h-4 text-orange-400" />
            <span>{item.subCategory}</span>
          </div>

          <div className="mt-1 flex items-center gap-2">
            {item.discountedPrice ? (
              <>
                <span className="text-green-600 font-bold text-base">
                  ₺{item.discountedPrice}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₺{item.price}
                </span>
              </>
            ) : (
              <span className="text-green-600 font-bold text-base">
                ₺{item.price}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end justify-between h-full gap-2">
          {!isLocked && (
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}

          {!isLocked && (
            <div className="flex items-center gap-2 bg-gray-700 rounded-full px-2 py-1">
              <button
                onClick={onDecrease}
                disabled={item.quan <= 1}
                className="p-1 rounded border-r border-gray-600"
                style={{ opacity: item.quan <= 1 ? 0.5 : 1 }}
              >
                <Minus className="w-4 h-4 text-gray-200" />
              </button>
              <span className="text-gray-200 font-medium">{item.quan}</span>
              <button
                onClick={onIncrease}
                className="p-1 rounded border-l border-gray-600"
              >
                <Plus className="w-4 h-4 text-gray-200" />
              </button>
            </div>
          )}

          {!isLocked && item.status === "" && (
            <button
              onClick={() => onStatusChange(item.id, "sipariş veriliyor")}
              disabled={item.status === "sipariş veriliyor"}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs py-1.5 px-3 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              Sipariş ver
            </button>
          )}

          {item.status && (
            <div
              className={`text-xs mt-1 px-2 py-1 rounded-full flex items-center gap-1 ${theme.text} ${theme.bg}`}
            >
              {theme.icon}
              <span>{theme.label}</span>
            </div>
          )}
        </div>
      </div>

      {item.status === "sipariş veriliyor" && cancelable && (
        <div className="flex items-center gap-4 w-full mt-1">
          <div className="w-full bg-gray-700 rounded-full h-2 relative">
            <div
              className="bg-red-500 h-full transition-all duration-1000 rounded-l-2xl rounded-r-2xl"
              style={{ width: `${(cancelCountdown / 30) * 100}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-white">
              {cancelCountdown}s
            </div>
          </div>

          <button
            onClick={() => onStatusChange(item.id, "iptal")}
            className="flex items-center text-nowrap font-medium justify-center p-1 pr-2 gap-1 text-xs rounded-full bg-red-600 text-white hover:bg-red-700 transition-all"
          >
            <CircleX size={16}/>
            İptal
          </button>
        </div>
      )}
    </div>
  );
};