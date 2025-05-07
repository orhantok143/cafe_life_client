import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  MessageCircle,
  ChevronLeft,
  User,
} from "lucide-react";
import { images } from "../assets/images";

export function ProductDetail() {
  const product = {
    name: "Latte Kahve",
    mainCategory: "İçecekler",
    subCategory: "Kahve",
    price: 25.99,
    discountPrice: 19.99,
    discountType: "special", // Genel veya Özel olarak değişebilir
    image: images.arabiata,
    reviews: [
      {
        user: "Ahmet",
        username: "ahmet123",
        avatar: images.profile_1,
        hasAvatar: false,
        rating: 5,
        comment:
          "Harika bir latte, her zaman alırım! Harika bir latte, her zaman alırım! Harika bir latte, her zaman alırım! Harika bir latte, her zaman alırım! Harika bir latte, her zaman alırım!",
        replies: [],
        likes: 10,
      },
      {
        user: "Ayşe",
        username: "ayshe123",
        avatar: images.profile_2,
        hasAvatar: true,
        rating: 4,
        comment: "Lezzetli, ama biraz daha yoğun olabilirdi.",
        replies: [],
        likes: 10,
      },
      {
        user: "Ali",
        username: "ali123",
        avatar: images.profile_3,
        hasAvatar: true,
        rating: 4,
        comment: "İyi, ama sıcaklık daha iyi olabilir.",
        replies: [],
        likes: 10,
      },
      {
        user: "Ali",
        username: "ali123",
        avatar: images.profile_3,
        hasAvatar: true,
        rating: 4,
        comment: "İyi, ama sıcaklık daha iyi olabilir.",
        replies: [],
        likes: 10,
      },
    ],
    averageRating: 4.3,
    selectedRating: 4.2,
  };

  const [selectedRating, setSelectedRating] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="flex items-center justify-between text-gray-200 h-14 bg-gray-900">
        <button onClick={handleBack} className="p-2 ">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="ml-2 text-lg font-semibold">Bildirimler</span>
        <span className="w-6 h-6 mr-2 text-lg font-semibold"></span>
      </div>
      <div className="bg-gray-800 text-white p-4">
        {/* Ürün Görseli */}
        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Ürün Bilgileri */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <div className="flex items-center text-lg text-gray-400 mt-2">
            {product.mainCategory} / {product.subCategory}
          </div>
        </div>

        {/* Fiyatlar ve İndirim Türü */}
        <div className="flex items-center gap-2 mb-1">
          {product.discountPrice && (
            <span className="text-lg font-semibold text-green-400">
              ₺{product.discountPrice}
            </span>
          )}
          {product.price && (
            <span
              className={`text-sm line-through ${
                product.discountPrice ? "text-gray-500" : "text-white"
              }`}
            >
              ₺{product.price}
            </span>
          )}
          {/* İndirim Türü */}
          {product.discountType && (
            <span
              className={`ml-2 text-xs font-medium px-2 py-1 rounded-xl ${
                product.discountType === "special"
                  ? "bg-red-500/20 text-red-500"
                  : "text-blue-500 bg-blue-500/20"
              }`}
            >
              {product.discountType === "special"
                ? "Özel İndirim"
                : "Genel İndirim"}
            </span>
          )}
        </div>

        {/* Ürün Açıklaması */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-white">
            Ürün Açıklaması
          </h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius
            id eveniet minima dolorem in velit.
          </p>
        </div>

        <div className="mb-6">
          {/* Ortalama Puan */}
          <div className="flex items-center gap-3 mb-3">
            <div className="text-yellow-400 text-3xl font-bold">
              {product.averageRating.toFixed(1)}
            </div>
            <div className="text-gray-400">/ 5.0</div>
          </div>

          {/* Puan Ver */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                onClick={() => setSelectedRating(star)}
                className={`cursor-pointer transition-colors ${
                  selectedRating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Yorumlar ve Puanlama */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Yorumlar ({product.reviews.length})
          </h2>

          {/* Yorum Yazma Alanı */}
          <div className="relative flex gap-3 items-start mb-6 bg-gray-700 p-2 rounded-lg border border-gray-700">
            {/* Textarea ve Gönder Butonu */}
            <div className="flex flex-col w-full">
              <textarea
                className=" w-full text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
                placeholder="Yorumunuzu yazın..."
                value={comment}
                onChange={handleCommentChange}
                rows="3"
              />
              <div className="flex justify-end mt-2">
                <button className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-400 transition-all">
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Yorumlar */}
          {product.reviews
            .slice(0, isExpanded ? product.reviews.length : 3)
            .map((review, index) => {
              return (
                <div
                  key={index}
                  className="my-8 px-2 py-4 border border-r-0 border-gray-600 rounded-lg relative"
                >
                  {/* Kullanıcı bilgileri */}

                  <div className="flex items-center px-1 -ml-1 mb-1 gap-2 absolute -top-4 w-full bg-gray-800">
                    {review.hasAvatar ? (
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-7 h-7 rounded-full object-cover border border-green-500"
                      />
                    ) : (
                      <User className="w-7 h-7 text-gray-500 p-0.5 rounded-full border border-green-500" />
                    )}
                    <div>
                      <div className="font-semibold text-xs text-white">
                        {review.user}
                      </div>
                      <div className="text-xs text-gray-500">
                        @{review.username}
                      </div>
                    </div>
                    <div className="text-yellow-400 text-xs place-self-end">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>

                  {/* Yorum içeriği */}
                  <div className="text-gray-400 pt-2 text-sm ">
                    {review.comment}
                  </div>

                  {/* Etkileşimler */}
                  <div className="flex items-center -ml-0 text-sm text-gray-500 gap-4 px-1 absolute -bottom-2.5 w-full bg-gray-800">
                    <button
                      onClick={() => setLiked(!liked)}
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <Heart
                        size={16}
                        className={
                          liked ? "fill-red-400 text-red-400" : "text-gray-500"
                        }
                      />
                      {liked ? review.likes + 1 : review.likes}
                    </button>

                    <button
                      onClick={() => setShowReply(!showReply)}
                      className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                    >
                      <MessageCircle size={16} />
                      {review.replies.length} yanıt
                    </button>
                  </div>

                  {/* Yanıt yazma alanı */}
                  {showReply && (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Yanıt yaz..."
                        className="w-full px-3 py-1 text-sm bg-gray-700 text-white rounded"
                      />
                    </div>
                  )}
                </div>
              );
            })}

          {/* Daha Fazla Yorum Butonu */}
          {product.reviews.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-400 mt-3 hover:underline"
            >
              {isExpanded ? "Daha Az Göster" : "Daha Fazla Göster"}
            </button>
          )}
        </div>

        {/* Sepete Ekle ve Favorilere Ekle */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-green-500 text-white px-4 py-2 text-nowrap rounded-xl flex items-center gap-3 hover:bg-green-400 transition-all">
            <ShoppingCart size={20} /> Sepete Ekle
          </button>
          <button className="bg-red-500 text-white px-4 py-2 text-nowrap  rounded-xl flex items-center gap-3 hover:bg-red-400 transition-all">
            <Heart size={20} /> Favorilere Ekle
          </button>
        </div>

        {/* Ürün Sayfası Alt Bilgileri */}
        <div className="text-xs text-gray-400 text-center mt-6">
        <span>© 2025 Kafe Life Uygulaması. Tüm hakları saklıdır.</span>

      </div>
      </div>
    </div>
  );
}
