import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Admin - Sport Store",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav admin-nav">
        <a href="/products">Sản phẩm</a>
        <a class="active" href="/admin">Admin</a>
        <a href="/admin/revenue">Doanh thu</a>
        <a href="/admin/users">Người dùng</a>
        <a href="/admin/orders">Đơn hàng</a>
        <a href="/admin/inventory">Kho</a>
      </nav>
      <div class="search-box admin-search-box">
        <div class="admin-top-summary">
          <div class="admin-header-name"><strong id="dashboardName">Admin</strong></div>
        </div>
        <button class="icon-button" id="logoutAdmin" type="button" title="Đăng xuất"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>
      </div>
    </div>
  </header>

  <main class="container" style="padding:28px 0;">
    <div id="adminGate" class="panel hidden">
      <h2>Bạn chưa có quyền vào trang quản trị</h2>
      <p>Hãy đăng nhập bằng tài khoản admin ở trang chủ trước.</p>
      <a class="btn primary" href="/">Về trang chủ</a>
    </div>

    <div id="adminContent" class="hidden">
      <div class="kpi-grid kpi-grid-admin">
        <div class="kpi"><div class="meta">Sản phẩm</div><div id="kpiProducts" class="number">0</div></div>
        <div class="kpi"><div class="meta">Danh mục</div><div id="kpiCategories" class="number">0</div></div>
              </div>

      <div id="adminNotice" class="notice hidden"></div>

      <section class="panel" style="margin-bottom:24px;">
        <div class="section-title">
          <div>
            <h2 style="margin:0">Khuyến mãi</h2>
            <p class="meta" style="margin:8px 0 0;">Vào từ trang Admin để quản lý riêng mã giảm giá và mã đổi điểm.</p>
          </div>
        </div>
        <div class="admin-shortcut-grid">
          <a class="admin-shortcut-card" href="/admin/coupons">
            <span class="admin-shortcut-label">Mã giảm giá</span>
            <strong>Quản lý coupon thanh toán</strong>
          </a>
          <a class="admin-shortcut-card" href="/admin/reward-coupons">
            <span class="admin-shortcut-label">Mã đổi điểm</span>
            <strong>Quản lý quà đổi bằng điểm</strong>
          </a>
        </div>
      </section>

      <section class="panel" style="margin-bottom:24px;">
        <div class="section-title">
          <div>
            <h2 style="margin:0">Sản phẩm bán chạy</h2>
            <p class="meta" style="margin:8px 0 0;">Xem nhanh danh sách sản phẩm bán chạy dựa trên số lượng đã bán.</p>
          </div>
        </div>
        <div id="salesChart" class="sales-chart empty">Chưa có dữ liệu bán hàng để hiển thị.</div>
      </section>

      <section class="panel" style="margin-bottom:24px;">
        <div class="section-title">
          <div>
            <h2 style="margin:0">Danh mục</h2>
            <p class="meta" style="margin:8px 0 0;">Thêm và sửa danh mục đã tách ra trang riêng.</p>
          </div>
          <a class="btn primary" href="/categories/new">Thêm danh mục</a>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Tên danh mục</th><th>Thao tác</th></tr></thead>
            <tbody id="categoryTable"></tbody>
          </table>
        </div>
      </section>
    </div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/admin.js"
],
  inlineScripts: [],
};

export default function AdminPage() {
  return <PageRenderer page={page} />;
}
