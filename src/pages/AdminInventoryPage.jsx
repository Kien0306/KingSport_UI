import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Quản lý kho",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav admin-nav">
        <a href="/products">Sản phẩm</a>
        <a href="/admin">Admin</a>
        <a href="/admin/revenue">Doanh thu</a>
        <a href="/admin/users">Người dùng</a>
        <a href="/admin/orders">Đơn hàng</a>
        <a class="active" href="/admin/inventory">Kho</a>
      </nav>
      <div class="search-box admin-search-box">
        <div class="admin-top-summary">
          <div class="admin-header-name"><strong id="inventoryAdminName">Admin</strong></div>
        </div>
        <button class="icon-button" id="logoutInventoryAdmin" type="button" title="Đăng xuất"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>
      </div>
    </div>
  </header>
  <main class="page">
    <div class="container">
      <section id="inventoryGate" class="panel hidden">
        <p class="meta">Bạn cần đăng nhập ADMIN.</p>
      </section>
      <section id="inventoryContent" class="hidden">
        <div class="page-header">
          <div>
            <h1>Quản lý kho</h1>
            <p>Nhập kho, xuất kho và theo dõi tồn hiện tại.</p>
          </div>
        </div>
        <div id="inventoryNotice" class="notice hidden"></div>
        <div class="panel">
          <div class="table-wrap">
            <table>
              <thead><tr><th>Sản phẩm</th><th>Danh mục</th><th class="center-cell">Tồn kho</th><th class="center-cell">Đã bán</th><th class="center-cell">Tồn theo size</th></tr></thead>
              <tbody id="inventoryTable"></tbody>
            </table>
          </div>
        </div>
        <div class="panel" style="margin-top:24px;">
          <div class="section-title"><h2>Lịch sử nhập xuất</h2></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Thời gian</th><th>Sản phẩm</th><th>Size</th><th>Loại</th><th class="center-cell">Số lượng</th><th class="center-cell">Tồn trước</th><th class="center-cell">Tồn sau</th></tr></thead>
              <tbody id="movementTable"></tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/admin-inventory.js"
],
  inlineScripts: [],
};

export default function AdminInventoryPage() {
  return <PageRenderer page={page} />;
}
