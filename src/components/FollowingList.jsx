import { useState } from "react";
import { UserCheck, MapPin } from "lucide-react";

export function FollowingList({ followingUsers, nearbyUsers, onSelect }) {  
  const [activeTab, setActiveTab] = useState("following");

  const renderUserList = (users) => (
    <div className="space-y-3 mt-3">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user)}
          className="w-full flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-3 rounded-xl text-left"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-white font-medium">{user.name}</div>
            <div className={`text-sm ${user.active ? "text-green-400" : "text-gray-400"}`}>
              {user.active ? "Çevrimiçi" : "Çevrimdışı"}
            </div>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="p-4">
      {/* Sekmeler */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab("following")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
            activeTab === "following"
              ? "bg-green-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          <UserCheck size={16} />
          Takip Ettiklerim
        </button>
        <button
          onClick={() => setActiveTab("nearby")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
            activeTab === "nearby"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          <MapPin size={16} />
          Çevredekiler
        </button>
      </div>

      {/* İçerik */}
      {activeTab === "following"
        ? renderUserList(followingUsers)
        : renderUserList(nearbyUsers)}
    </div>
  );
}
