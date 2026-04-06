import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Mã đổi điểm - Sport Store",
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
          <div class="admin-header-name"><strong id="couponAdminName">Admin</strong></div>
        </div>
        <button class="icon-button" id="logoutCouponAdmin" type="button" title="Đăng xuất"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>
      </div>
    </div>
  </header>
  <main class="container" style="padding:28px 0;">
    <div id="couponGate" class="panel hidden">
      <h2>Bạn chưa có quyền vào trang mã đổi điểm</h2>
      <a class="btn primary" href="/">Về trang chủ</a>
    </div>
    <div id="couponContent" class="hidden">
      <section class="panel">
        <div class="section-title">
          <div>
            <h2 id="couponFormTitle" style="margin:0">Thêm mã đổi điểm</h2>
            <p class="meta" style="margin:8px 0 0;">Tạo hoặc cập nhật mốc đổi điểm riêng cho hệ thống tích điểm.</p>
          </div>
          <a class="btn secondary" href="/admin/reward-coupons">Quay lại mã đổi điểm</a>
        </div>
        <div id="couponFormNotice" class="notice hidden" style="margin-bottom:16px;"></div>
        <form id="couponForm" class="admin-coupon-form panel" style="padding:0; border:none; box-shadow:none;">
          <input type="hidden" id="couponId">
          <div class="coupon-form-grid">
            <label><span>Loại</span><select id="couponType"><option value="fixed">Giảm tiền cố định</option><option value="percent">Giảm theo %</option></select></label>
            <label><span>Giá trị</span><input id="couponValue" type="number" min="1" required></label>
            <label><span>Điểm cần đổi</span><input id="couponPointsCost" type="number" min="0" value="0"></label>
            <label><span>Giảm tối đa</span><input id="couponMaxDiscount" type="number" min="0" value="0"></label>
            <label><span>Số mã còn lại</span><input id="couponRewardStock" type="number" min="0" value="0"></label>
            <div class="coupon-active-row"><label class="checkbox-option coupon-inline-check"><input id="couponActive" type="checkbox" checked><span>Đang hoạt động</span></label></div>
          </div>
          <div id="rewardTypeHint" class="meta" style="margin-top:12px;"></div>
          <div class="coupon-form-actions">
            <button class="btn primary" type="submit">Lưu mã đổi điểm</button>
            <button class="btn secondary" type="button" id="cancelRewardCoupon">Huỷ</button>
          </div>
        </form>
      </section>
    </div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/reward-coupon-form.js"
],
  inlineScripts: [],
};

export default function RewardCouponFormPage() {
  return <PageRenderer page={page} />;
}
