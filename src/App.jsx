import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useEffect } from "react";
import { ChatContainer } from "./pages/ChatContainer";
import ProfilePage from "./pages/ProfilePage";
import Chat from "./pages/Chat";
import NotificationPage from "./pages/NotificationPage";
import { ProductDetail } from "./components/ProductDetail";
import Login from "./components/Login";
import AuthLayout from "./pages/AuthLayout";
import Register from "./components/Register";

function App() {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
    }, [location.pathname]); // location değiştiğinde çalışır

    return null;
  };
  return (
    <div className=" min-h-screen">
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chat" element={<ChatContainer />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chatprofile" element={<Chat />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
