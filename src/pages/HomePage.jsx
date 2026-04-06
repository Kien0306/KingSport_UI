import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "KINGSPORT - Trang chủ",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav">
        <a href="/products">Sản phẩm</a>
        <a id="ordersLink" class="hidden" href="/orders">Đơn hàng</a>
        <a id="adminLink" class="hidden" href="/admin">Admin</a>
      </nav>
      <div class="search-box">
        <input id="searchInput" type="text" placeholder="Tìm kiếm sản phẩm nổi bật...">
        <a class="nav-icon-link cart-link" href="/cart" title="Giỏ hàng" aria-label="Giỏ hàng"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 12H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg><span class="nav-badge" id="cartCount">0</span></a>
        <div id="userArea"></div>
      </div>
    </div>
  </header>

  <main class="container page">
    <section class="hero-slider hero-slider-wide" id="heroSlider">
      <div class="hero-slides" id="heroSlides">
        <div class="hero-slide active">
          <img src="/images/banner-fit-1.jpg" alt="Banner thể thao 1">
        </div>
        <div class="hero-slide">
          <img src="/images/banner-fit-2.jpg" alt="Banner thể thao 2">
        </div>
        <div class="hero-slide">
          <img src="/images/banner-fit-3.jpg" alt="Banner thể thao 3">
        </div>
      </div>
      <button class="hero-nav hero-prev" type="button" aria-label="Ảnh trước" onclick="prevHeroSlide()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="hero-nav hero-next" type="button" aria-label="Ảnh tiếp theo" onclick="nextHeroSlide()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="hero-dots" id="heroDots"></div>
    </section>

    <section class="home-collection-wrap">
      <div class="home-collection-card home-toggle-card">
        <div class="page-header simple-header home-collection-head home-toggle-head">
          <div class="home-toggle-tabs" role="tablist" aria-label="Bộ sưu tập trang chủ">
            <button class="home-toggle-tab active" id="homeTabFeatured" type="button" data-mode="featured" aria-pressed="true">Sản phẩm nổi bật</button>
            <button class="home-toggle-tab" id="homeTabBestSelling" type="button" data-mode="best-selling" aria-pressed="false">Sản phẩm bán chạy</button>
          </div>
          <a class="section-link-more" id="homeCollectionMoreLink" href="/products?mode=featured">Xem tất cả</a>
        </div>
        <div id="homeFeaturedGrid" class="grid compact-grid"></div>
        <div id="homeBestSellingGrid" class="grid compact-grid hidden"></div>
      </div>
    </section>

    <div class="footer-space"></div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/shop.js"
],
  inlineScripts: [
  "initHomePage();"
],
};

export default function HomePage() {
  return <PageRenderer page={page} />;
}
