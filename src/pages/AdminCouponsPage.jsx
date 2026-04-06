import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Mã giảm giá - Sport Store",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav admin-nav">
        <a href="/products">Sản phẩm</a>
        <a href="/admin">Admin</a>
        <a href="/admin/revenue">Doanh thu</a>
        <a href="/admin/users">Người dùng</a>
        <a href="/admin/orders">Đơn hàng</a>
        <a href="/admin/inventory">Kho</a>
      </nav>
      <div class="search-box admin-search-box">
        <div class="admin-top-summary"><div class="admin-header-name"><strong id="couponAdminName">Admin</strong></div></div>
        <button class="icon-button" id="logoutCouponAdmin" type="button" title="Đăng xuất"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>
      </div>
    </div>
  </header>
  <main class="container" style="padding:28px 0;">
    <div id="couponGate" class="panel hidden"><p class="meta">Bạn cần đăng nhập ADMIN.</p></div>
    <div id="couponContent" class="hidden">
      <section class="panel">
        <div class="section-title list-toolbar">
          <div>
            <h2 style="margin:0">Mã giảm giá</h2>
            <p class="meta" style="margin:8px 0 0;">Quản lý mã giảm giá thanh toán riêng, tách biệt với mã đổi điểm.</p>
          </div>
          <div class="list-toolbar-actions"><a class="btn secondary" href="/admin">Quay lại</a><a class="btn primary" href="/admin/coupons/new">Thêm mã giảm giá</a></div>
        </div>
        <div id="couponNotice" class="notice hidden"></div>
        <div class="table-wrap" style="margin-top:16px;">
          <table>
            <thead><tr><th>Mã</th><th>Tên hiển thị</th><th>Loại</th><th>Giá trị</th><th>Đơn tối thiểu</th><th>Giảm tối đa</th><th>Trạng thái</th><th>Thao tác</th></tr></thead>
            <tbody id="couponTable"></tbody>
          </table>
        </div>
      </section>
    </div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/admin-coupons.js"
],
  inlineScripts: [],
};

export default function AdminCouponsPage() {
  return <PageRenderer page={page} />;
}
