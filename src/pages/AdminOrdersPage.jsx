import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Đơn hàng - Admin",
  body: `
    <header class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="/">KING<span>SPORT</span></a>

        <nav class="nav admin-nav">
          <a href="/products">Sản phẩm</a>
          <a href="/admin">Admin</a>
          <a href="/admin/revenue">Doanh thu</a>
          <a href="/admin/users">Người dùng</a>
          <a class="active" href="/admin/orders">Đơn hàng</a>
          <a href="/admin/inventory">Kho</a>
        </nav>

        <div class="search-box admin-search-box">
          <div class="admin-top-summary">
            <div class="admin-header-name">
              <strong id="ordersAdminName">Admin</strong>
            </div>
          </div>

          <button
            class="icon-button"
            id="logoutOrdersAdmin"
            type="button"
            title="Đăng xuất"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="container" style="padding:28px 0;">
      <div id="ordersGate" class="panel hidden">
        <h2>Bạn chưa có quyền vào trang đơn hàng</h2>
        <a class="btn primary" href="/">Về trang chủ</a>
      </div>

      <div id="ordersContent" class="hidden">
        <div id="ordersAdminNotice" class="notice hidden"></div>

        <section class="panel">
          <div class="section-title">
            <div>
              <h2 style="margin:0">Đơn hàng khách đặt</h2>
              <p class="meta" style="margin:8px 0 0;">
                Xem người đặt hàng, cập nhật trạng thái và xóa đơn đã thanh toán,
                đã giao.
              </p>
            </div>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th class="center-cell">Mã</th>
                  <th>Người đặt hàng</th>
                  <th>Sản phẩm</th>
                  <th class="center-cell">Thanh toán</th>
                  <th>Trạng thái thanh toán</th>
                  <th>Giao hàng</th>
                  <th class="center-cell">Tổng tiền</th>
                  <th class="center-cell">Ngày đặt</th>
                  <th class="center-cell">Thao tác</th>
                </tr>
              </thead>
              <tbody id="ordersAdminTable"></tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  `,
  scripts: ["/js/common.js", "/js/admin-orders.js"],
  inlineScripts: [],
};

export default function AdminOrdersPage() {
  return <PageRenderer page={page} />;
}