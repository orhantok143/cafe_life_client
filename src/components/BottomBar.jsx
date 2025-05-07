import { useState } from "react";
import {
  ShoppingCart,
  Home,
  Bell,
  UserCircle,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Badge from "../utils/Badge";

const menuItems = [
  { id: "cart", label: "Cart", icon: <ShoppingCart size={24} /> },
  { id: "chat", label: "Chat", icon: <MessageCircle size={24} /> },
  { id: "home", label: "Home", icon: <Home size={24} /> },
  { id: "notification", label: "Notification", icon: <Bell size={24} /> },
  { id: "profile", label: "Profile", icon: <UserCircle size={24} /> },
];

const BottomBar = ({ cartIconRef }) => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="fixed sm:bottom-2 mx-auto sm:max-w-lg rounded-0 sm:rounded-2xl bottom-0 overflow-hidden w-full left-0 right-0 bg-gray-800/20 backdrop-blur-2xl text-gray-200 p-4 flex justify-around items-center shadow-lg z-50 ">
      {menuItems.map((item, index) => (
        <div
          ref={index === 0 ? cartIconRef : null}
          key={item.id}
          className={`relative cursor-pointer transition  duration-200  rounded-full  ${
            activeTab === item.id
              ? " text-green-500 bg-green-500/20 p-2 -translate-y-2 scale-120 rounded-full"
              : "text-gray-400"
          }`}
          onClick={() => handleTabClick(item.id)}
        >
          <div className="relative w-full h-full rounded-full">
            <span className="absolute -top-2 -right-2">
              <Badge text="1" color="red" />
            </span>
          </div>
          {item.icon}
          {/* {activeTab === item.id && (
            <>
              <div className="mt-1 w-4 h-0.5 bg-blue-500 rounded-full"></div>
              <span className="text-xs mt-1">{item.label}</span>
            </>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
