import { ChevronLeft } from "lucide-react";

export default function ChatHeader({ user, onBack }) {
  return (
    <div className="bg-gray-800 px-2 py-2 flex items-center justify-between shadow-md h-14">
      {/* Geri butonu + kişi bilgisi */}
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="text-gray-300 hover:text-white">
          <ChevronLeft size={22} />
        </button>

        <img
          src={user.avatar}
          alt={user.name}
          className="w-9 h-9 rounded-full border border-gray-600"
        />

        <div>
          <div className="text-sm font-semibold text-white">{user.name}</div>
          <div className="text-xs text-green-400">
            {user.active ? "Çevrimiçi" : "Son görülme: 2 saat önce"}
          </div>
        </div>
      </div>

      {/* Sağ taraf: Menü/Seçenekler */}
      {/* <button className="text-gray-400 hover:text-white">
        <MoreVertical size={20} />
      </button> */}
    </div>
  );
}
