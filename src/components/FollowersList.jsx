export function FollowersList({ followers, onToggleFollow }) {
  return (
    <div className="space-y-4">
      {followers.map((follower) => (
        <div
          key={follower.id}
          className="flex items-center justify-between bg-gray-800 p-3 rounded-md shadow"
        >
          {/* Sol taraf: Avatar ve bilgiler */}
          <div className="flex items-center space-x-3">
            <img
              src={follower.avatar}
              alt={follower.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-white font-semibold">{follower.name}</div>
              <div className="text-gray-400 text-sm">@{follower.username}</div>
            </div>
          </div>

          {/* Sağ taraf: Takip/Çıkar butonu */}
          <button
            onClick={() => onToggleFollow(follower.id)}
            className={`text-sm px-3 py-1 rounded-full transition ${
              follower.isFollowing
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {follower.isFollowing ? "Takibi Bırak" : "Takip Et"}
          </button>
        </div>
      ))}
    </div>
  );
}
