import React from "react";
import PageRenderer from "../app/PageRenderer.jsx";

const page = {
  title: "Người dùng - Sport Store",
  body: `<header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="/">KING<span>SPORT</span></a>
      <nav class="nav admin-nav">
        <a href="/products">Sản phẩm</a>
        <a href="/admin">Admin</a>
        <a href="/admin/revenue">Doanh thu</a>
        <a class="active" href="/admin/users">Người dùng</a>
        <a href="/admin/orders">Đơn hàng</a>
        <a href="/admin/inventory">Kho</a>
      </nav>
      <div class="search-box admin-search-box">
        <div class="admin-top-summary">
          <div class="admin-header-name"><strong id="usersAdminName">Admin</strong></div>
        </div>
        <button class="icon-button" id="logoutUsersAdmin" type="button" title="Đăng xuất"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></button>
      </div>
    </div>
  </header>

  <main class="container" style="padding:28px 0;">
    <div id="usersGate" class="panel hidden">
      <h2>Bạn chưa có quyền vào trang người dùng</h2>
      <p>Hãy đăng nhập bằng tài khoản admin ở trang chủ trước.</p>
      <a class="btn primary" href="/">Về trang chủ</a>
    </div>

    <div id="usersContent" class="hidden">
      <div id="usersNotice" class="notice hidden"></div>
      <section class="panel">
        <div class="section-title">
          <div>
            <h2 style="margin:0">Người dùng</h2>
            <p class="meta" style="margin:8px 0 0;">Quản lý trạng thái tài khoản khách hàng.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Username</th><th>Họ tên</th><th>Email</th><th>Role</th><th>Trạng thái</th><th>Thao tác</th></tr></thead>
            <tbody id="userTable"></tbody>
          </table>
        </div>
      </section>
    </div>
  </main>`,
  scripts: [
  "/js/common.js",
  "/js/users-admin.js"
],
  inlineScripts: [],
};

export default function UsersAdminPage() {
  return <PageRenderer page={page} />;
}
