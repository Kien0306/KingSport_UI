import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Đơn hàng của tôi",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav">
        <a href="/products">Sản phẩm</a>
        <a id="ordersLink" class="hidden active" href="/orders">Đơn hàng</a>
        <a id="adminLink" class="hidden" href="/admin">Admin</a>
      </nav>
      <div class="search-box">
        <input id="searchInput" type="text" placeholder="Tìm kiếm sản phẩm...">
        <a class="nav-icon-link cart-link" href="/cart" title="Giỏ hàng" aria-label="Giỏ hàng"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 12H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="nav-badge" id="cartCount">0</span></a>
        <div id="userArea"></div>
      </div>
    </div>
  </header>

  <main class="container page">
    <div class="page-header simple-header"><div><h1>Đơn hàng của tôi</h1></div></div>
    <section class="panel"><div id="ordersList"></div></section>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/shop.js"
],
  inlineScripts: [
  "initOrdersPage();"
],
};

export default function OrdersPage() {
  return <PageRenderer page={page} />;
}
