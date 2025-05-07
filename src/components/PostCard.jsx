import { Heart, MessageCircle, Share2 } from "lucide-react";

export function PostCard({ post }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-4 mb-3 text-white">
      {/* Üst Bilgi */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="w-10 h-10 rounded-full border border-gray-600"
        />
        <div>
          <div className="text-sm font-semibold">{post.user.name}</div>
          <div className="text-xs text-gray-400">@{post.user.username} · {post.date}</div>
        </div>
      </div>

      {/* İçerik */}
      <div className="text-sm mb-3">{post.content}</div>

      {/* Görsel (varsa) */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full rounded-md mt-2 object-cover max-h-60"
        />
      )}

      {/* Alt İkonlar */}
      <div className="flex items-center gap-6 text-gray-400 mt-3">
        <button className="flex items-center gap-1 hover:text-red-400 transition">
          <Heart size={18} /> {post.likes}
        </button>
        <button className="flex items-center gap-1 hover:text-blue-400 transition">
          <MessageCircle size={18} /> {post.comments}
        </button>
        <button className="flex items-center gap-1 hover:text-green-400 transition">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}
