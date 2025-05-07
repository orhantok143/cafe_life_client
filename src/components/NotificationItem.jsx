import { Flame, Snowflake } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NotificationItem({ data }) {
  const {
    text,
    time,
    read,
    temperature,
    businessName,
  } = data;

  const history = useNavigate(); // React Router kullanarak yönlendirme işlemi için history nesnesini alıyoruz
  const isHot = temperature === "hot";
  const accentColor = isHot ? "text-orange-400" : "text-cyan-400";
  const bgColor = read ? "bg-gray-800" : "bg-gray-700";

  const handleClick = () => {
    // Yönlendirme işlemi: Bildirim tıklandığında ilgili sayfaya git
    history(`/product/${data.id}`); // Burada yönlendirmek istediğiniz sayfa yolunu belirtin`);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full px-4 py-3 mb-2 rounded-lg flex items-start gap-3 ${bgColor}`}
    >
      <div className={`mt-1 ${accentColor}`}>
        {isHot ? <Flame size={20} /> : <Snowflake size={20} />}
      </div>

      <div className="flex-1">
        <div className="text-sm text-white">{text}</div>
        <div className="text-xs text-gray-400 mt-1 flex items-center gap-2">
          <span>{businessName}</span> • <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
