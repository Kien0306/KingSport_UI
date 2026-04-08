import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Doanh thu - Sport Store",
  body: `
    <header class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="/">KING<span>SPORT</span></a>

        <nav class="nav admin-nav">
          <a href="/products">Sản phẩm</a>
          <a href="/admin">Admin</a>
          <a class="active" href="/admin/revenue">Doanh thu</a>
          <a href="/admin/users">Người dùng</a>
          <a href="/admin/orders">Đơn hàng</a>
          <a href="/admin/inventory">Kho</a>
        </nav>

        <div class="search-box admin-search-box">
          <div class="admin-top-summary">
            <div class="admin-header-name">
              <strong id="revenueAdminName">Admin</strong>
            </div>
          </div>

          <button
            class="icon-button"
            id="logoutRevenueAdmin"
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
      <div id="revenueGate" class="panel hidden">
        <h2>Bạn chưa có quyền vào trang doanh thu</h2>
        <p>Hãy đăng nhập bằng tài khoản admin trước.</p>
        <a class="btn primary" href="/">Về trang chủ</a>
      </div>

      <div id="revenueContent" class="hidden">
        <section class="summary-kpi-grid">
          <div class="panel mini-kpi">
            <span>Tổng doanh thu</span>
            <strong id="kpiRevenue">0đ</strong>
          </div>

          <div class="panel mini-kpi">
            <span>Doanh thu đã thanh toán</span>
            <strong id="kpiPaidRevenue">0đ</strong>
          </div>

          <div class="panel mini-kpi">
            <span>Tổng đơn</span>
            <strong id="kpiOrders">0</strong>
          </div>
        </section>

        <div class="revenue-dashboard-grid simple">
          <section class="panel chart-card">
            <div class="chart-card-head">
              <h3>Doanh thu 7 ngày gần nhất</h3>
              <span id="trendGrowth">0đ</span>
            </div>
            <div id="trendChart" class="trend-bars"></div>
          </section>

          <section class="panel chart-card">
            <div class="chart-card-head">
              <h3>Mặt hàng bán chạy</h3>
              <span id="topSellingCount">0 sản phẩm</span>
            </div>
            <div id="topSellingChart" class="top-selling-chart"></div>
          </section>
        </div>

        <div
          class="revenue-dashboard-grid single-chart-row"
          style="margin-top:24px;"
        >
          <section class="panel chart-card">
            <div class="chart-card-head">
              <h3>Doanh thu theo tháng</h3>
              <span id="monthlyGrowth">0đ</span>
            </div>
            <div id="monthlyTrendChart" class="trend-bars"></div>
          </section>
        </div>
      </div>
    </main>
  `,
  scripts: ["/js/common.js", "/js/revenue.js"],
  inlineScripts: [],
};

export default function RevenuePage() {
  return <PageRenderer page={page} />;
}