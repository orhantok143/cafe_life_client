import React, { useEffect, useRef, useState } from "react";
import BottomBar from "./BottomBar";
import ProductCard from "./ProductCard";
import { CategoryBanner } from "../utils/CategoryBanner";
import CategoryBar from "./CategoryBar";
import TopBar from "./TopBar";
import { images } from "../assets/images";
import drinkBanner from "../assets/images/milkshake.jpg";
import foodBanner from "../assets/images/food_banner.jpg";
import dessertBanner from "../assets/images/dessert_banner.avif";

import foodBannerIcon from "../assets/icons/FoodIcon.svg";
import drinkBannerIcon from "../assets/icons/DrinkIcon.svg";
import dessertBannerIcon from "../assets/icons/DessertIcon.svg";
import { getFavorites } from "../utils/favoriteProducts";

const MenuPage = () => {
  const cartIconRef = useRef();
  const [cart, setCart] = useState([]); // Başlangıçta boş bir dizi

const addToCart = (tableId, productToAdd) => {
  console.log(productToAdd);
  
  setCart((prevCart) => {
    // Masa zaten varsa güncelle, yoksa yeni masa ekle
    const updatedCart = [...prevCart];
    const tableIndex = updatedCart.findIndex((t) => t.tableId === tableId);

    if (tableIndex !== -1) {
      // Masa bulundu, içindeki ürünleri güncelle
      const table = { ...updatedCart[tableIndex] };
      const items = [...table.items];

      // Aynı ürün var mı diye kontrol et
      const existingItem = items.find(item => item.product.id === productToAdd.id);

      if (existingItem) {
        existingItem.quantity += 1; // Miktarı arttır
      } else {
        items.push({ product: productToAdd, quantity: 1 }); // Yeni ürün ekle
      }

      const totalPrice = items.reduce(
        (sum, item) => sum + (item.product?.discountedPrice ? item.product?.discountedPrice : item.product?.price) * item.quantity,
        0
      );
      

      updatedCart[tableIndex] = { ...table, items, totalPrice };
    } else {
      // Masa yoksa yeni masa ve ürün oluştur
      updatedCart.push({
        tableId,
        items: [{ product: productToAdd, quantity: 1 }],
        totalPrice: productToAdd.discountedPrice,
      });
    }

    return updatedCart;
  });
};

console.log(cart);



  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "food"
  );
  const handleCategoryChange = (category) => {
    localStorage.setItem("selectedCategory", category);
    setSelectedCategory(category);
  };

  // Kategori verileri
  const categoryData = [
    {
      title: "Günün Tabağı",
      subtitle:
        "Ana yemekler, salatalar ve doyurucu tabaklarla her damak zevkine uygun seçenekler",
      image: foodBanner,
      category: "food",
      gradient: "from-black/80 to-transparent",
      discount: 20,
      deadline: "1 Mayıs 2025",
      icons: [
        {
          src: foodBannerIcon,
          className: "w-8 h-8 top-6 left-6",
          style: { position: "absolute", opacity: 0.7 },
        },
      ],
    },
    {
      title: "Serinleten İçecekler",
      subtitle:
        "Sıcak ve soğuk içecekler, özel tarifler, klasikler ve sağlıklı alternatifler",
      image: drinkBanner,
      category: "drink",
      gradient: "from-black/80 to-transparent",
      discount: 20,
      deadline: "1 Mayıs 2025",
      icons: [
        {
          src: drinkBannerIcon,
          className: "w-8 h-8 top-6 left-6",
          style: { position: "absolute", opacity: 0.7 },
        },
      ],
    },
    {
      title: "Tatlı Molası",
      subtitle:
        "Şerbetli tatlılar, pastalar, dondurmalar ve atıştırmalık lezzetler bir arada",
      image: dessertBanner,
      category: "dessert",
      gradient: "from-black/80 to-transparent",
      discount: 20,
      deadline: "1 Mayıs 2025",
      icons: [
        {
          src: dessertBannerIcon,
          className: "w-8 h-8 top-6 left-6",
          style: { position: "absolute", opacity: 0.7 },
        },
      ],
    },
    {
      title: "Beğendiklerim",
      subtitle:
        "Şerbetli tatlılar, pastalar, dondurmalar ve atıştırmalık lezzetler bir arada",
      image: dessertBanner,
      category: "favorites",
      gradient: "from-black/80 to-transparent",
      discount: 20,
      deadline: "1 Mayıs 2025",
      icons: [
        {
          src: dessertBannerIcon,
          className: "w-8 h-8 top-6 left-6",
          style: { position: "absolute", opacity: 0.7 },
        },
      ],
    },
  ];

  // Ürün verileri
  const products = [
    {
      id: 1,
      title: "Ali Nazik",
      image: images.ali_nazik,
      category: "food",
      price: 140,
      discountedPrice: 125,
      rating: 2,
      badge: "Popüler",
      discountType: "general", // İndirim türü
    },
    {
      id: 2,
      title: "Arabiata",
      image: images.arabiata,
      category: "food",
      price: 95,
      discountedPrice: 89,
      rating: 4.5,
      badge: "Yeni",
      discountType: "special", // İndirim türü
    },
    {
      id: 3,
      title: "Tiramisu",
      image: images.tramisu_1,
      category: "dessert",
      price: 70,
      discountedPrice: 60,
      rating: 4.8,
      badge: "Tavsiye",
      discountType: "special", // İndirim türü
    },
    {
      id: 4,
      title: "Avokado Milkshake",
      image: images.avacado_milkshake,
      category: "drink",
      price: 55,
      discountedPrice: 49,
      rating: 4.4,
      discountType: "general", // İndirim türü
    },
    {
      id: 5,
      title: "Barbekü Tavuk",
      image: images.barbeku_soslu_tavuk,
      category: "food",
      price: 110,
      discountedPrice: 99,
      rating: 4.6,
      badge: "İndirim",
      discountType: "special", // İndirim türü
    },
    {
      id: 6,
      title: "Browni",
      image: images.browni,
      category: "dessert",
      price: 65,
      discountedPrice: 59,
      rating: 4.2,
      discountType: "general", // İndirim türü
    },
    {
      id: 7,
      title: "Çilekli Milkshake",
      image: images.cilek_milkshake,
      category: "drink",
      price: 45,
      discountedPrice: 39,
      rating: 4.3,
      badge: "Favori",
      discountType: "special", // İndirim türü
    },
    {
      id: 8,
      title: "Kavurma",
      image: images.kavurma,
      category: "food",
      price: 150,
      discountedPrice: 135,
      rating: 4.8,
      discountType: "general", // İndirim türü
    },
    {
      id: 9,
      title: "Lazanya",
      image: images.lazanya,
      category: "food",
      price: 105,
      discountedPrice: 95,
      rating: 4.5,
      discountType: "special", // İndirim türü
    },
    {
      id: 10,
      title: "Limon & Nane",
      image: images.limon_mint,
      category: "drink",
      price: 35,
      discountedPrice: 32,
      rating: 4.0,
      discountType: "general", // İndirim türü
    },
    {
      id: 11,
      title: "Lokum",
      image: images.lokum,
      category: "food",
      price: 40,
      discountedPrice: 36,
      rating: 4.1,
      discountType: "special", // İndirim türü
    },
    {
      id: 12,
      title: "Mango Smoothie",
      image: images.mango_smoothie,
      category: "drink",
      price: 50,
      discountedPrice: 45,
      rating: 4.2,
      discountType: "general", // İndirim türü
    },
    {
      id: 13,
      title: "Mexico Chicken",
      image: images.mexico_chicken,
      category: "food",
      price: 115,
      discountedPrice: 105,
      rating: 4.3,
      discountType: "special", // İndirim türü
    },
    {
      id: 14,
      title: "Penne",
      image: images.penne,
      category: "food",
      price: 85,
      discountedPrice: 79,
      rating: 4.4,
      discountType: "general", // İndirim türü
    },
    {
      id: 15,
      title: "Pizza - Karışık",
      image: images.pizza_3,
      category: "food",
      price: 120,
      discountedPrice: 110,
      rating: 4.6,
      discountType: "special", // İndirim türü
    },
    {
      id: 16,
      title: "Pizza - Sucuklu",
      image: images.pizza_meat,
      category: "food",
      price: 115,
      discountedPrice: 105,
      rating: 4.4,
      discountType: "general", // İndirim türü
    },
    {
      id: 17,
      title: "Steak",
      image: images.steak,
      category: "food",
      price: 180,
      discountedPrice: 160,
      rating: 4.9,
      badge: "Şefin Seçimi",
      discountType: "special", // İndirim türü
    },
    {
      id: 18,
      title: "Tiramisu (Orijinal)",
      image: images.tramisu_1,
      category: "dessert",
      price: 75,
      discountedPrice: 65,
      rating: 4.7,
      discountType: "general", // İndirim türü
    },
  ];

  // Favori ürünleri almak için bir fonksiyon
  const filteredProducts =
    selectedCategory === "favorites"
      ? getFavorites()
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa yüklendiğinde en üste git
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <TopBar
        cafeName="Latte & Co."
        tableNumber={12}
        couponProgress={{ current: 90, total: 100 }}
      />

      <CategoryBar handleCategoryChange={handleCategoryChange} />
      {categoryData.map(
        (category, index) =>
          selectedCategory === category.category.toLowerCase() && (
            <CategoryBanner
              key={index}
              title={category.title}
              subtitle={category.subtitle}
              image={category.image}
              gradient={category.gradient}
              discount={category.discount}
              deadline={category.deadline}
              icons={category.icons}
            />
          )
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-between pb-20">
        {filteredProducts.slice(0).map((product) => (
          <ProductCard
            addToCart={(tableId,productToAdd) => addToCart(tableId,productToAdd)}
            cartIconRef={cartIconRef}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <BottomBar cartIconRef={cartIconRef} />
    </div>
  );
};

export default MenuPage;
