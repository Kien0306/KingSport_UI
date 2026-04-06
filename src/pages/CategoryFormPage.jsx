import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Quản lý danh mục",
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
        <h1 id="categoryFormTitle">Thêm danh mục</h1>
        <p id="categoryFormSubtitle">Tạo danh mục mới trong hệ thống.</p>
      </div>
      <a class="btn secondary" href="/admin">Quay lại quản trị</a>
    </div>

    <section class="panel" style="max-width:900px; margin:0 auto;">
      <form id="categoryForm" class="card">
        <input id="categoryId" type="hidden">
        <div class="form-grid">
          <div>
            <label>Tên danh mục</label>
            <input id="categoryName" required>
          </div>
          <input id="categoryImage" type="hidden">
        </div>
        <div style="margin-top:12px" class="row">
          <button class="btn primary" type="submit" id="submitCategoryBtn">Lưu danh mục</button>
          <a class="btn secondary" href="/admin">Huỷ</a>
        </div>
      </form>
      <div id="categoryFormMessage" class="notice hidden"></div>
    </section>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/shop.js",
  "/js/category-form.js"
],
  inlineScripts: [],
};

export default function CategoryFormPage() {
  return <PageRenderer page={page} />;
}
