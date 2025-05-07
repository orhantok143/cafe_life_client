import { ShoppingBag, Tag, Store } from "lucide-react"; // Lucide ikonları

export function OrderCard({ order }) {
  const { name, subCategory, price, businessName } = order;

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-lg mb-6">
      {/* Sipariş Başlığı ve İşletme Adı */}
      <div className="mb-4">
        <div className="flex items-center space-x-3 mb-2">
          <ShoppingBag size={30} className="text-yellow-300" />
          <span className="text-2xl font-semibold text-nowrap text-white">{name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Store size={20} className="text-gray-100" />
          <span className="text-sm text-gray-200">{businessName}</span>
        </div>
      </div>

      {/* Alt Kategori ve Fiyat */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-200 flex items-center space-x-2">
          <Tag size={18} className="text-yellow-200" />
          <span className="font-semibold">Alt Kategori:</span> <span>{subCategory}</span>
        </div>
        <div className="text-lg font-semibold text-gray-100">
          <span className="font-bold">Fiyat: {price} ₺</span>
        </div>
      </div>
    </div>
  );
}
