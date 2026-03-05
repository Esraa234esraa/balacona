import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuCategory from "./pages/MenuCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Offers } from "./pages/Offers";
import OfferDetails from "./pages/OfferDetails";
import GiftPage from "./pages/gift/GiftPage";
import GiftCheckout from "./pages/gift/GiftCheckout";
import GiftSuccess from "./pages/gift/GiftSuccess";
import GiftRedeem from "./pages/gift/GiftRedeem";
import GiftCreatePage from "./pages/gift/GiftCreatePage";
import GiftRedeemed from "./pages/gift/GiftRedeemed";
import RewardsPage from "./pages/rewards/RewardsPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-[#efefef] *:dark:bg-bala-dark-bg flex flex-col">
              <ScrollToTop />
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/menu/:categoryId" element={<MenuCategory />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/offers/:offerId" element={<OfferDetails />} />
                  <Route path="/gifts" element={<GiftPage />} />
                  <Route
                    path="/gift/create/:designId"
                    element={<GiftCreatePage />}
                  />
                  <Route path="/gift/redeemed" element={<GiftRedeemed />} />
                  <Route path="/gift/checkout" element={<GiftCheckout />} />
                  <Route path="/gift/success" element={<GiftSuccess />} />
                  <Route path="/gift/redeem" element={<GiftRedeem />} />
                  <Route path="/rewards" element={<RewardsPage />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
