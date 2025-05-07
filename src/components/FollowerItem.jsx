export function FollowerItem({ user, onFollowToggle }) {
    const isFollowing = user.isFollowing;
  
    return (
      <div className="bg-gray-800 mb-3 rounded-2xl flex items-center justify-between px-4 py-3">
        {/* Sol: Avatar */}
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          <div>
            <div className="text-sm text-white font-medium">{user.name}</div>
            <div className="text-xs text-gray-400">@{user.username}</div>
          </div>
        </div>
  
        {/* Sağ: Buton */}
        <button
          onClick={() => onFollowToggle(user.id)}
          className={`text-xs px-3 py-1 rounded-full font-medium transition-all
            ${
              isFollowing
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }
          `}
        >
          {isFollowing ? "Takipten Çıkar" : "Sende Onu Takip Et"}
        </button>
      </div>
    );
  }
  