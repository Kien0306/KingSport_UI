import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminCouponsPage from "../pages/AdminCouponsPage.jsx";
import AdminInventoryPage from "../pages/AdminInventoryPage.jsx";
import AdminOrdersPage from "../pages/AdminOrdersPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CategoryFormPage from "../pages/CategoryFormPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import CouponFormPage from "../pages/CouponFormPage.jsx";
import ForgotPasswordPage from "../pages/ForgotPasswordPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import OrdersPage from "../pages/OrdersPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ProductFormPage from "../pages/ProductFormPage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import ResetPasswordPage from "../pages/ResetPasswordPage.jsx";
import RevenuePage from "../pages/RevenuePage.jsx";
import RewardCouponFormPage from "../pages/RewardCouponFormPage.jsx";
import RewardCouponsAdminPage from "../pages/RewardCouponsAdminPage.jsx";
import RewardsPage from "../pages/RewardsPage.jsx";
import UsersAdminPage from "../pages/UsersAdminPage.jsx";

const appRoutes = [
  { path: "/", element: HomePage },
  { path: "/admin", element: AdminPage },
  { path: "/admin/coupons", element: AdminCouponsPage },
  { path: "/admin/coupons/new", element: CouponFormPage },
  { path: "/admin/coupons/edit/:id", element: CouponFormPage },
  { path: "/admin/inventory", element: AdminInventoryPage },
  { path: "/admin/orders", element: AdminOrdersPage },
  { path: "/admin/categories/new", element: CategoryFormPage },
  { path: "/admin/categories/edit/:id", element: CategoryFormPage },
  { path: "/categories/new", element: CategoryFormPage },
  { path: "/categories/edit/:id", element: CategoryFormPage },
  { path: "/admin/products/new", element: ProductFormPage },
  { path: "/admin/products/edit/:id", element: ProductFormPage },
  { path: "/products/new", element: ProductFormPage },
  { path: "/products/edit/:id", element: ProductFormPage },
  { path: "/admin/revenue", element: RevenuePage },
  { path: "/admin/reward-coupons", element: RewardCouponsAdminPage },
  { path: "/admin/reward-coupons/new", element: RewardCouponFormPage },
  { path: "/admin/reward-coupons/edit/:id", element: RewardCouponFormPage },
  { path: "/admin/users", element: UsersAdminPage },
  { path: "/cart", element: CartPage },
  { path: "/checkout", element: CheckoutPage },
  { path: "/forgot-password", element: ForgotPasswordPage },
  { path: "/login", element: LoginPage },
  { path: "/orders", element: OrdersPage },
  { path: "/product/:id", element: ProductDetailPage },
  { path: "/products/:id", element: ProductDetailPage },
  { path: "/products", element: ProductsPage },
  { path: "/register", element: RegisterPage },
  { path: "/reset-password/:token", element: ResetPasswordPage },
  { path: "/rewards", element: RewardsPage },
];

export default function App() {
  return (
    <Routes>
      {appRoutes.map(({ path, element: PageComponent }) => (
        <Route key={path} path={path} element={<PageComponent />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
