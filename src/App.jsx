import AboutUsPage from "./components/AboutUsPage";
import CategoriePage from "./components/CategoriePage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ServicePage from "./components/ServicePage";
import ProfilePage from "./components/ProfilePage";
import CartPage from "./components/CartPage";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import WishListPage from "./components/WishListPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import PaymentPage from "./components/PaymentPage";
import ThankYouPage from "./components/ThankYouPage";
import OrderTrackingPage from "./components/OrderTrackingPage";
import MyOrderPage from "./components/MyOrderPage";
import LoginPage from "./components/LoginPage";
import UserDropdownPage from "./components/UserDropdownPage";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/CategoriePage/:ct" element={<CategoriePage />} />
        <Route path="/CategoriePage" element={<CategoriePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/ServicePage" element={<ServicePage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/ServiceDetailsPage/:id" element={<ServiceDetailsPage />} />
        <Route path="/WishListPage" element={<WishListPage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
        <Route path="/OrderTrackingPage" element={<OrderTrackingPage />} />
        <Route path="/MyOrderPage" element={<MyOrderPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/UserDropdownPage" element={<UserDropdownPage />} />
      </Routes>
    </main>
  );
}

export default App;
