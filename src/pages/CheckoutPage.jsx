import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Thanh toán",
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
        <h1>Thanh toán</h1>
      </div>
      <a class="btn secondary" href="/cart">← Quay lại giỏ hàng</a>
    </div>

    <section class="cart-layout">
      <div class="panel">
        <form id="checkoutForm" onsubmit="event.preventDefault(); handleCheckout();">
          <div class="form-grid">
            <div>
              <label for="checkoutFullName">Họ tên người nhận</label>
              <input id="checkoutFullName" type="text" placeholder="Nhập họ tên" required>
            </div>
            <div>
              <label for="checkoutPhone">Số điện thoại</label>
              <input id="checkoutPhone" type="text" placeholder="Nhập số điện thoại" required>
            </div>
            <div class="full">
              <label for="checkoutAddress">Địa chỉ nhận hàng</label>
              <textarea id="checkoutAddress" placeholder="Nhập địa chỉ giao hàng" required></textarea>
            </div>
            <div class="full">
              <label>Điểm tích lũy của bạn</label>
              <div id="loyaltyCheckoutBox" class="loyalty-inline-box">Đang tải điểm...</div>
            </div>
            <div class="full">
              <label for="couponCode">Mã giảm giá</label>
              <div class="coupon-row">
                <input id="couponCode" type="text" placeholder="Nhập mã giảm giá, ví dụ: GIAM50K">
                <button class="btn secondary" type="button" onclick="applyCoupon()">Áp dụng</button>
              </div>
              <div id="couponMessage" class="meta" style="margin-top:8px;"></div>
            </div>
            <div class="full">
              <label>Phương thức thanh toán</label>
              <div class="row payment-methods" id="paymentMethods">
                <label class="choice-chip payment-choice active"><input type="radio" name="paymentMethod" value="cod" checked><span>Thanh toán khi nhận hàng</span></label>
                <label class="choice-chip payment-choice"><input type="radio" name="paymentMethod" value="bank"><span>Chuyển khoản</span></label>
              </div>
              <div id="bankTransferBox" class="bank-transfer-box hidden">
                <h4>Thông tin chuyển khoản</h4>
                <div><strong>Ngân hàng:</strong> MB Bank</div>
                <div><strong>Số tài khoản:</strong> 1900202608888</div>
                <div><strong>Chủ tài khoản:</strong> PHAN MINH SANG</div>
                <div class="meta">Sau khi bấm Đặt hàng, đơn sẽ được lưu vào database với trạng thái chờ xác nhận chuyển khoản.</div>
              </div>
            </div>
          </div>
          <div id="checkoutMessage" class="notice hidden"></div>
          <div class="row" style="margin-top:18px;">
            <button id="checkoutBtn" class="btn primary" type="submit">Đặt hàng</button>
          </div>
        </form>
      </div>
      <div class="panel summary-card">
        <h3 style="margin-top:0">Đơn hàng của bạn</h3>
        <div id="checkoutSummary"></div>
        <div class="row between" style="margin-top:18px;"><span>Tạm tính</span><strong id="checkoutSubtotal">0đ</strong></div>
        <div class="row between" style="margin-top:10px;"><span>Giảm giá</span><strong id="checkoutDiscount">0đ</strong></div>
        <div class="row between" style="margin-top:18px; padding-top:18px; border-top:1px solid var(--border);">
          <span>Tổng thanh toán</span>
          <strong id="checkoutTotal">0đ</strong>
        </div>
        <div class="meta" style="margin-top:10px;">Bạn có thể đổi điểm ở mục <strong>Đơn hàng</strong> để lấy mã giảm giá cá nhân.</div>
      </div>
    </section>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/shop.js"
],
  inlineScripts: [
  "initCheckoutPage();"
],
};

export default function CheckoutPage() {
  return <PageRenderer page={page} />;
}
