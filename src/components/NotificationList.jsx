import { NotificationItem } from "./NotificationItem";

const notifications = [
  {
    id: 1,
    type: "personal_discount",
    text: "Favori içeceğin Latte'de sana özel %30 indirim!",
    time: "2 saat önce",
    read: false,
    temperature: "hot",
    businessName: "Cafe Onyx",
  },
  {
    id: 2,
    type: "new_product",
    text: "Menüye yeni Frozen Berry eklendi. Denemek ister misin?",
    time: "1 gün önce",
    read: true,
    temperature: "cold",
    businessName: "Mokka House",
  },
  {
    id: 3,
    type: "general_discount",
    text: "Tüm kahvelerde %20 indirim başladı!",
    time: "3 gün önce",
    read: false,
    temperature: "hot",
    businessName: "Kahve Durağı",
  },
];

export function NotificationList() {
  return (
    <div className="px-4">
      {notifications.length === 0 ? (
        <div className="text-center text-gray-500">Henüz bildirim yok.</div>
      ) : (
        notifications.map((item) => (
          <NotificationItem key={item.id} data={item} />
        ))
      )}
    </div>
  );
}
