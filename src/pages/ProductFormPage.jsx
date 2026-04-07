import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Quản lý sản phẩm",
  body: `
    <header class="topbar">
      <div class="container topbar-inner">
        <a class="brand" href="/">
          KING<span>SPORT</span>
        </a>

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
      <div class="page-header">
        <div>
          <h1 id="productFormTitle">Thêm sản phẩm</h1>
          <p id="productFormSubtitle">Tạo sản phẩm mới trong hệ thống.</p>
        </div>

        <a class="btn secondary" href="/products">Quay lại sản phẩm</a>
      </div>

      <section class="panel" style="max-width:980px; margin:0 auto;">
        <form id="productForm" class="card">
          <input id="productId" type="hidden" />

          <div class="form-grid">
            <div>
              <label>Tên sản phẩm</label>
              <input id="productTitle" required />
            </div>

            <div>
              <label>Giá mặc định</label>
              <input id="productPrice" type="number" min="0" required />
            </div>

            <div>
              <label>Danh mục</label>
              <select id="productCategory"></select>
            </div>

            <div class="full">
              <label>Giới tính</label>
              <div
                id="productGenderOptions"
                class="option-grid inline-options"
              ></div>
            </div>

            <div class="full">
              <label>Chọn ảnh từ máy</label>
              <input id="productImageFile" type="file" accept="image/*" />
              <input id="productImage" type="hidden" />
            </div>

            <div class="full image-preview-wrap">
              <img
                id="productImagePreview"
                class="image-preview hidden"
                alt="Xem trước ảnh sản phẩm"
              />
            </div>

            <div class="full">
              <label>Kích thước</label>
              <div class="tag-builder">
                <input
                  id="productSizeInput"
                  type="text"
                  placeholder="Nhập size rồi nhấn Enter, ví dụ: S, M, 40, One Size"
                />
                <div
                  id="productSizeTags"
                  class="option-grid size-grid tag-list"
                ></div>
              </div>
            </div>

            <div class="full">
              <label>Giá theo kích thước</label>
              <div
                id="productSizePriceWrap"
                class="card"
                style="padding:16px; background:#fafafa;"
              ></div>
            </div>

            <div class="full">
              <label>Tồn kho theo size</label>
              <div
                id="productSizeStockWrap"
                class="card"
                style="padding:16px; background:#fafafa;"
              ></div>
            </div>

            <div class="full">
              <label>Màu sắc</label>
              <div class="color-builder-grid">
                <input
                  id="productColorNameInput"
                  type="text"
                  placeholder="Nhập tên màu rồi nhấn Enter, ví dụ: Đỏ, Đen, Xanh lam"
                />

                <div class="color-picker-wrap">
                  <span>Mã màu</span>
                  <input
                    id="productColorHexInput"
                    type="color"
                    value="#2563eb"
                  />
                </div>
              </div>

              <div
                id="productColorTags"
                class="option-grid color-grid tag-list"
              ></div>
            </div>

            <div class="full checkbox-line">
              <label class="checkbox-option">
                <input id="productFeatured" type="checkbox" />
                <span>Đánh dấu là sản phẩm nổi bật ở trang chủ</span>
              </label>
            </div>

            <div class="full">
              <label>Mô tả</label>
              <textarea id="productDescription"></textarea>
            </div>
          </div>

          <div style="margin-top:12px" class="row">
            <button
              class="btn primary"
              type="submit"
              id="submitProductBtn"
            >
              Lưu sản phẩm
            </button>

            <a class="btn secondary" href="/products">Huỷ</a>
          </div>
        </form>

        <div id="productFormMessage" class="notice hidden"></div>
      </section>
    </main>
  `,
  scripts: ["/js/common.js", "/js/shop.js", "/js/product-form.js"],
  inlineScripts: [],
};

export default function ProductFormPage() {
  return <PageRenderer page={page} />;
}