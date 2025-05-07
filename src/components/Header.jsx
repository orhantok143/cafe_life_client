import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function Header({ user }) {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1); // Bir önceki sayfaya geri dön
  }
  return (
    <div className="bg-gray-800 flex items-center py-2 px-2 justify-between shadow-md h-14">
      {/* Sohbet edilen kişi bilgisi (sol taraf) */}
      <div className="flex items-center gap-3 text-gray-200" >
        <ChevronLeft onClick={handleBack} size={22}/>
        <img
        onClick={() => navigate('/profile')}
          src={user.avatar}
          alt="profil"
          className="w-9 h-9 rounded-full border border-gray-600"
        />
        <div>
          <div className="text-sm font-semibold text-white">{user.name}</div>
          <div className="text-xs text-green-400">
            {user.active ? "Çevrimiçi" : "Çevrimdışı"}
          </div>
        </div>
      </div>
    </div>
  );
}
