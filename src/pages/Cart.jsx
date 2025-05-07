import React, { useEffect, useState } from "react";
import { PageLayout } from "../utils/PageLayout";
import { CartItem } from "../components/CartItem";
import { images } from "../assets/images";
import { ChevronLeft, Loader } from "lucide-react";

const Cart = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: images.pizza_cheese,
      title: "Cheeseburger",
      category: "Yemek",
      subCategory: "Burger",
      price: 80,
      discountedPrice: 50,
      quan: 2,
      status: "",
    },
    {
      id: 2,
      image: images.pizza_3,
      title: "Salamlı Pizza",
      category: "Yemek",
      subCategory: "Pizza",
      price: 90,
      discountedPrice: 70,
      quan: 1,
      status: "hazırlanıyor",
    },
    {
      id: 3,
      image: images.pizza_meat,
      title: "Sushi Set",
      category: "Yemek",
      subCategory: "Sushi",
      price: 120,
      discountedPrice: null,
      quan: 1,
      status: "hazır",
    },
    {
      id: 4,
      image: images.barbeku_soslu_tavuk,
      title: "Vegan Burger",
      category: "Yemek",
      subCategory: "Burger",
      price: 75,
      discountedPrice: 60,
      quan: 3,
      status: "teslim edildi",
    },
    {
      id: 5,
      image: images.cilek_milkshake,
      title: "Kola",
      category: "İçecek",
      subCategory: "Gazlı",
      price: 20,
      discountedPrice: 15,
      quan: 2,
      status: "beklemede",
    },
    {
      id: 5,
      image: images.cilek_milkshake,
      title: "Kola",
      category: "İçecek",
      subCategory: "Gazlı",
      price: 20,
      discountedPrice: 15,
      quan: 2,
      status: "iptal",
    },
  ]);

  const handleBack = () => {
    window.history.back();
  };

  const handleOrder = () => {
    const updatedOrders = orders.map(item => {
      return item.status === "" ? { ...item, status: "sipariş veriliyor" } : item;
    });
    setOrders(updatedOrders);
  };
  
  const isOrdering = orders.some(item => item.status === "sipariş veriliyor");

  const handleStatusChange = (id,status) => {
    const updated = [...orders];
    const index = updated.findIndex(item => item.id === id);
    if (index !== -1) {
      updated[index].status = status;
    }
    setOrders(updated);
  };

  const handleOrderİsNotOrdered = () => {
    const isNotOrdered = orders.filter(item => item.status === "");
    return isNotOrdered;
  };

  return (
    <div className="mb-17">
      <div className="flex items-center justify-between text-gray-200 h-14">
        <button onClick={handleBack} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="ml-2 text-lg font-semibold">Sepet</span>
        <span className="w-6 h-6 mr-2 text-lg font-semibold"></span>
      </div>

      <PageLayout>
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              onStatusChange={(id,newStatus) => handleStatusChange(id,newStatus)} // onStatusChange prop
              setOrders={setOrders}
              isDisabled={item.status !== ""} // Disable if order is in progress
              onIncrease={() => {
                const updated = [...orders];
                updated[index].quan += 1;
                setOrders(updated);
              }}
              onDecrease={() => {
                if (item.quan > 1) {
                  const updated = [...orders];
                  updated[index].quan -= 1;
                  setOrders(updated);
                }
              }}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Sepetinizde ürün yok.
          </div>
        )}
      </PageLayout>

      {/* Sipariş Ver Butonu */}
      <div className="px-2 ">
      <button
        onClick={handleOrder}
        disabled={isOrdering}
        className="max-w-[375px] mx-auto fixed bottom-2 left-2 right-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
      >
        {isOrdering ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            Sipariş Veriliyor
          </>
        ) : (
          <>
            ({handleOrderİsNotOrdered().length}) Sipariş Ver
          </>
        )}
      </button>
      </div>
    </div>
  );
};

export default Cart;
