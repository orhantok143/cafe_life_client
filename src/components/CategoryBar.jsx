import { useState, forwardRef } from "react";
import { Utensils, CupSoda, CakeSlice, Heart } from "lucide-react";

const categoryData = [
  { id: "food", label: "Yemek", icon: <Utensils size={22} />, bg: "bg-red-600" },
  { id: "drink", label: "İçecek", icon: <CupSoda size={22} />, bg: "bg-indigo-600" },
  { id: "dessert", label: "Tatlı", icon: <CakeSlice size={22} />, bg: "bg-pink-600" },
  { id: "favorites", label: "Favorim", icon: <Heart size={22} />, bg: "bg-orange-600" }
];

// 🟡 forwardRef doğru kullanımı burada:
const CategoryBar = forwardRef(({ handleCategoryChange },ref) => {
  const [activeCategory, setActiveCategory] = useState("food");

  const handleChange = (category) => {
    handleCategoryChange(category.id);
    setActiveCategory(category.id);
  };

  return (
    <div
    ref={ref}
      className="fixed top-10 w-full max-w-4xl bg-gray-900 z-40 flex gap-3 p-3 shadow-lg shadow-gray-800/20 backdrop-blur-2xl"
    >
      {categoryData.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <button
            key={category.id}
            onClick={() => handleChange(category)}
            className={`flex flex-col items-center p-2 h-full w-16 rounded-lg transition-colors
              ${
                isActive
                  ? `${category.bg || "bg-green-600"} text-white`
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"
              }`}
          >
            {category.icon}
            <span className="text-sm font-medium pt-1">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
});

export default CategoryBar;
