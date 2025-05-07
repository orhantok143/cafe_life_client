import { useState } from "react";
import { ChevronLeft, Pencil, Save } from "lucide-react";
import { images } from "../assets/images";
import { FollowersList } from "./FollowersList";
import { Rewards } from "./Rewards";
import { OrderCard } from "./OrderCard";

export function Profile({ user }) {
  const initialFollowers = [
    {
      id: 1,
      name: "Ahmet Kaya",
      username: "ahmetk",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Örnek avatar
      isFollowing: true,
    },
    {
      id: 2,
      name: "Selin Demir",
      username: "selind",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg", // Örnek avatar
      isFollowing: false,
    },
    {
      id: 3,
      name: "Murat Yılmaz",
      username: "muratymz",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg", // Örnek avatar
      isFollowing: true,
    },
    {
      id: 4,
      name: "Elif Arslan",
      username: "elifarslan",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg", // Örnek avatar
      isFollowing: false,
    },
    {
      id: 5,
      name: "Deniz Çetin",
      username: "denizc",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg", // Örnek avatar
      isFollowing: true,
    },
  ];
const currentPoints = 10; // Kullanıcının mevcut puanı
const pointsToNextCoupon = 1200; // Kupon kazanmak için gereken ek puan

const exampleCoupons = [
  {
    code: "HGFT-2024",
    earnedDate: "2025-05-05",
    expiryDate: "2025-05-20",
    amount: 50,
    used: false, // Henüz kullanılmamış – Aktif kupon
  },
  {
    code: "USED-9001",
    earnedDate: "2025-04-10",
    expiryDate: "2025-04-30",
    amount: 25,
    used: true, // Kullanılmış kupon
  },
  {
    code: "EXPD-7711",
    earnedDate: "2025-04-01",
    expiryDate: "2025-04-15",
    amount: 30,
    used: false, // Süresi geçmiş, ama kullanılmamış
  },
];

// Örnek Kullanım
const exampleOrder = {
  name: "Pizza Margherita",
  subCategory: "Pizza",
  price: "40",
  businessName: "Mamma Mia Pizzeria",
};


  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("followers");
  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    avatar: user.avatar || "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log(formData);
  };

  const tabClasses = (key) =>
    `flex-1 text-center py-2 text-xs cursor-pointer transition font-semibold ${
      activeTab === key
        ? "border-b-2 border-green-400 text-white"
        : "text-gray-400"
    }`;

  const [followers, setFollowers] = useState(initialFollowers); // örnek data yukarıda

  const handleToggleFollow = (id) => {
    const updated = followers.map((f) =>
      f.id === id ? { ...f, isFollowing: !f.isFollowing } : f
    );
    setFollowers(updated);
    // Opsiyonel: API'ye güncelleme isteği gönder
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Üst Bar */}
      <div className="bg-gray-800 px-2 py-3 flex items-center justify-between shadow-md">
        <ChevronLeft
          onClick={() => window.history.back()}
          size={22}
          className="cursor-pointer"
        />
        <div className="text-xl font-semibold">Profil</div>
        <div
          onClick={() => setIsEditing(!isEditing)}
          className="cursor-pointer"
        >
          {isEditing ? (
            <Save size={20} onClick={handleSave} />
          ) : (
            <Pencil size={20} />
          )}
        </div>
      </div>

      {/* Profil Bilgileri */}
      <div className="flex flex-col items-center py-8">
        {/* Avatar */}
        <img
          src={formData.avatar || images.placeholder}
          alt="Profil Resmi"
          className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-md object-cover"
        />

        {/* İsim */}
        {isEditing ? (
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-4 px-4 py-2 bg-gray-700 rounded text-white text-center"
          />
        ) : (
          <div className="mt-4 text-xl font-semibold">{formData.name}</div>
        )}

        {/* Kullanıcı Adı */}
        {isEditing ? (
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="mt-2 px-4 py-1 bg-gray-700 rounded text-gray-300 text-center text-sm"
          />
        ) : (
          <div className="text-sm text-gray-400">@{formData.username}</div>
        )}
      </div>

      {/* Sekmeler */}
      <div className="flex border-t border-gray-700">
        <div
          className={tabClasses("followers")}
          onClick={() => setActiveTab("followers")}
        >
          Takipçiler
        </div>
        <div
          className={tabClasses("following")}
          onClick={() => setActiveTab("following")}
        >
          Takip Edilenler
        </div>
        <div
          className={tabClasses("rewards")}
          onClick={() => setActiveTab("rewards")}
        >
          Kupon & Puan
        </div>
        <div
          className={tabClasses("orders")}
          onClick={() => setActiveTab("orders")}
        >
          Siparişler
        </div>
      </div>

      {/* Sekme İçerikleri */}
      <div className="p-4">
        {activeTab === "followers" && (
          <FollowersList
            followers={followers}
            onToggleFollow={handleToggleFollow}
          />
        )}

        {activeTab === "following" && <p>Takip edilenler buraya gelecek.</p>}
        {activeTab === "rewards" && (
          <Rewards coupons={exampleCoupons} currentPoints={currentPoints} pointsToNextCoupon={pointsToNextCoupon} />
        )}
        {activeTab === "orders" && <OrderCard order={exampleOrder} />}
      </div>
    </div>
  );
}
