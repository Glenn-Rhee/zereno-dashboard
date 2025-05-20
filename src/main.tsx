import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import DashboardPage from "./pages/DasboardPage.tsx";
import NotFound from "./Components/NotFound.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SettingPage from "./pages/SettingPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/" element={<DashboardPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/settings" element={<SettingPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
