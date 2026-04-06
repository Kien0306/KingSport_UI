import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Giỏ hàng",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav">
        <a href="/products">Sản phẩm</a>
        <a id="ordersLink" class="hidden" href="/orders">Đơn hàng</a>
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
    <div class="page-header">
      <div>
        <h1>Giỏ hàng</h1>
      </div>
      <a class="btn secondary" href="/products">Tiếp tục mua sắm</a>
    </div>

    <section class="cart-layout">
      <div class="panel">
        <div id="cartList"></div>
      </div>
      <div class="panel summary-card">
        <h3 style="margin-top:0">Tóm tắt đơn hàng</h3>
        <div class="row between" style="margin-bottom:10px;">
          <span>Tổng tiền</span>
          <strong id="cartSummaryTotal">0đ</strong>
        </div>
        <div class="row between" style="margin-bottom:18px;">
          <span>Thanh toán tạm tính</span>
          <strong id="cartTotal">0đ</strong>
        </div>
        <a class="btn primary" style="width:100%; text-align:center; display:inline-block;" href="/checkout">Thanh toán</a>
      </div>
    </section>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/shop.js"
],
  inlineScripts: [
  "initCartPage();"
],
};

export default function CartPage() {
  return <PageRenderer page={page} />;
}
