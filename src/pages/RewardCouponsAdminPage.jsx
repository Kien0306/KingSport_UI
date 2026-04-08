import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Mã đổi điểm",
  body: `
    <header class="topbar">
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
          <div class="admin-top-summary">
            <div class="admin-header-name">
              <strong id="rewardAdminName">Admin</strong>
            </div>
          </div>

          <button
            class="icon-button"
            id="logoutRewardAdmin"
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
      <div id="rewardGate" class="panel hidden">
        <p class="meta">Bạn cần đăng nhập ADMIN.</p>
      </div>

      <div id="rewardContent" class="hidden">
        <section class="panel">
          <div class="section-title list-toolbar">
            <div>
              <h2 style="margin:0">Mã đổi điểm</h2>
              <p class="meta" style="margin:8px 0 0;">
                Quản lý mốc đổi điểm riêng, tách biệt với mã giảm giá bên admin.
              </p>
            </div>

            <div class="list-toolbar-actions">
              <a class="btn secondary" href="/admin">Quay lại</a>
              <a class="btn primary" href="/admin/reward-coupons/new">
                Thêm mã đổi điểm
              </a>
            </div>
          </div>

          <div id="rewardNotice" class="notice hidden"></div>

          <div class="table-wrap" style="margin-top:16px;">
            <table>
              <thead>
                <tr>
                  <th>Điểm đổi</th>
                  <th>Giá trị giảm</th>
                  <th>Giảm tối đa</th>
                  <th>Còn lại</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody id="rewardCouponTable"></tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  `,
  scripts: ["/js/common.js", "/js/reward-coupons-admin.js"],
  inlineScripts: [],
};

export default function RewardCouponsAdminPage() {
  return <PageRenderer page={page} />;
}