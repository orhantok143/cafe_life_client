import { ShoppingCart, Heart, Star, BadgeCheck } from "lucide-react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { addFavorite, getFavorites, isFavorite, removeFavorite } from "../utils/favoriteProducts";
import { useNavigate } from "react-router-dom";
import StarTrail from "../utils/StarTrail";

const themeMap = {
  food: {
    icon: "🍛",
    badgeColor: "bg-amber-700/30 text-amber-200",
  },
  "drink-hot": {
    icon: "☕",
    badgeColor: "bg-orange-700/30 text-orange-200",
  },
  "drink-cold": {
    icon: "🧊",
    badgeColor: "bg-sky-700/30 text-sky-200",
  },
  dessert: {
    icon: "🍩",
    badgeColor: "bg-pink-700/30 text-pink-200",
  },
  default: {
    icon: "📦",
    badgeColor: "bg-gray-600/40 text-gray-300",
  },
};

const ProductCard = ({ product , cartIconRef,addToCart }) => {
  const [favoritedProducts, setFavoritedProducts] = useState([]);
  const navigate = useNavigate();
  const fromRef = useRef();
  const [starTrigger, setStarTrigger] = useState(false);

  useEffect(() => {
    const storedFavorites = getFavorites();
    if (storedFavorites) {
      setFavoritedProducts(storedFavorites);
    }
  }, []);


  const handleAddToCart = (product) => {
    setStarTrigger(false); // tetikleyiciyi resetle
    setTimeout(() => setStarTrigger(true), 1); // tetikle
    addToCart(1,product)
 
  };

  const handleFavorite = (product) => {
    const isFavorited = isFavorite(product);
    if (!isFavorited) {
      addFavorite(product);
      const updatedFavorites = [...favoritedProducts, product];
      setFavoritedProducts(updatedFavorites);
    }else {
      const updatedFavorites = favoritedProducts.filter(
        (item) => item.title.trim().toLowerCase() !== product.title.trim().toLowerCase()
      );
      console.log("Favorilerden çıkarıldı:", updatedFavorites);
      setFavoritedProducts(updatedFavorites);
      removeFavorite(product);
      
    }

  };

  const theme = themeMap[product.category] || themeMap.default;

const handleProductDetails = () => {
  navigate(`/product/${product.id}`);
  };

  return (
   <>
    <div  
    
    className="relative rounded-2xl shadow-md w-full overflow-hidden bg-gray-800 text-gray-200 transition group border-1 border-gray-700 hover:border-gray-500">
      {/* Görsel */}
      <img
        src={product.image}
        alt={product.title}
        onClick={handleProductDetails}
        className="h-50 w-full object-cover object-center"
      />

      <div className="p-2">
        {/* Favori ikonu */}
        <div className="absolute top-3 right-3 text-red-500 cursor-pointer z-10 p-1 rounded-full bg-gray-800/50 hover:bg-gray-700/60 transition duration-200">
          <Heart
            size={20}
            onClick={() => handleFavorite(product)}
            className={favoritedProducts.find(p=>p.title === product.title) ? "fill-red-500" : "fill-none"}
          />
        </div>

        {/* Etkinlik etiketi */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm flex items-center gap-1 ${theme.badgeColor}`}
          >
            <BadgeCheck size={14} /> {product.badge}
          </div>
        )}
        {/* Başlık */}
        <h3 className="text-md font-bold mt-1">{product.title}</h3>
        {/* Kategori */}
        <p className="text-[12px] text-gray-400 capitalize">
          {product.category}
        </p>
        {/* Fiyatlar ve İndirim Türü */}
        <div className="flex items-center gap-2 ">
          {product.discountedPrice && (
            <span className="text-lg font-semibold text-green-400">
              ₺{product.discountedPrice}
            </span>
          )}
          {product.price && (
            <span
              className={`text-sm line-through ${
                product.discountedPrice ? "text-gray-500" : "text-white"
              }`}
            >
              ₺{product.price}
            </span>
          )}
          {/* İndirim Türü */}
          {product.discountType && (
            <span
              className={`ml-2 text-xs font-medium p-1 rounded-xl ${
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
        {/* Puan */}
        {product.rating && (
          <div className="mt-2 flex justify-start">
            <div
              className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-xl ${
                product.rating >= 4.5
                  ? "bg-green-600/50 text-green-300"
                  : product.rating >= 3
                  ? "bg-yellow-600/50 text-yellow-300"
                  : "bg-red-600/50 text-red-300"
              }`}
            >
              <Star size={12} className="fill-current" />
              {product.rating}
            </div>
          </div>
        )}
        {/* Sepet */}
        <button
      ref={fromRef}
          onClick={() => handleAddToCart(product)}
          className="absolute bottom-2 right-2 bg-green-600/20 text-green-400 rounded-full p-2 shadow hover:scale-105 transition"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
     <StarTrail fromRef={fromRef} toRef={cartIconRef} trigger={starTrigger} />
   </>
  );
}

export default ProductCard