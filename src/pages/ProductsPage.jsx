import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Sản phẩm",
  body: `
    <header class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="/">KING<span>SPORT</span></a>

        <nav class="nav">
          <a class="active" href="/products">Sản phẩm</a>
          <a id="ordersLink" class="hidden" href="/orders">Đơn hàng</a>
          <a id="adminLink" class="hidden" href="/admin">Admin</a>
        </nav>

        <div class="search-box">
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />

          <a
            class="nav-icon-link cart-link"
            href="/cart"
            title="Giỏ hàng"
            aria-label="Giỏ hàng"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <span class="nav-badge" id="cartCount">0</span>
          </a>

          <div id="userArea"></div>
        </div>
      </div>
    </header>

    <main class="container page">
      <div class="page-header simple-header">
        <div>
          <h1 id="catalogTitle">Sản phẩm</h1>
        </div>

        <div class="row">
          <a
            id="openProductFormBtn"
            class="btn primary hidden"
            href="/products/new"
          >
            Thêm sản phẩm
          </a>
        </div>
      </div>

      <section class="layout">
        <aside class="sidebar">
          <div class="filter-group filter-heading filter-heading-row">
            <h3>Bộ lọc</h3>
            <button
              class="btn secondary btn-sm"
              id="clearFiltersBtn"
              type="button"
            >
              Xóa bộ lọc
            </button>
          </div>

          <div class="filter-group collapsible open">
            <button class="filter-toggle" type="button" data-filter-toggle>
              <span>Danh mục</span>
            </button>
            <div class="filter-content" id="categoryFilters"></div>
          </div>

          <div class="filter-group collapsible open">
            <button class="filter-toggle" type="button" data-filter-toggle>
              <span>Giới tính</span>
            </button>
            <div class="filter-content" id="genderFilters"></div>
          </div>

          <div class="filter-group collapsible open">
            <button class="filter-toggle" type="button" data-filter-toggle>
              <span>Kích thước</span>
            </button>
            <div class="filter-content" id="sizeFilters"></div>
          </div>

          <div class="filter-group collapsible open">
            <button class="filter-toggle" type="button" data-filter-toggle>
              <span>Màu sắc</span>
            </button>
            <div class="filter-content" id="colorFilters"></div>
          </div>
        </aside>

        <div class="panel product-panel">
          <div class="catalog-toolbar">
            <label class="catalog-sort-label" for="sortSelect">
              Phân loại
            </label>
            <select id="sortSelect" class="catalog-sort-select">
              <option value="">Mặc định</option>
              <option value="price_asc">Giá tăng dần</option>
              <option value="price_desc">Giá giảm dần</option>
              <option value="name_asc">Tên A-Z</option>
            </select>
          </div>

          <div id="productGrid" class="grid"></div>
          <div id="productPagination" class="catalog-pagination"></div>
        </div>
      </section>

      <div class="footer-space"></div>
    </main>
  `,
  scripts: ["/js/common.js", "/js/shop.js"],
  inlineScripts: ["initProductsPage();"],
};

export default function ProductsPage() {
  return <PageRenderer page={page} />;
}