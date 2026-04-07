import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AUTH_STYLES = `
.auth-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(320px, 1.1fr) minmax(420px, 0.9fr);
  background:
    linear-gradient(135deg, rgba(16, 24, 40, 0.86), rgba(88, 28, 135, 0.72)),
    url('/images/banner-fit-1.jpg') center/cover no-repeat;
}

.auth-showcase {
  color: #fff;
  padding: 56px clamp(28px, 5vw, 72px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.auth-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.auth-brand-badge {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.22);
  font-size: 18px;
}

.auth-copy {
  max-width: 560px;
}

.auth-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.auth-title {
  margin: 18px 0 14px;
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.08;
  font-weight: 800;
}

.auth-description {
  margin: 0;
  max-width: 500px;
  font-size: 17px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.84);
}

.auth-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.auth-highlight {
  padding: 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.auth-highlight strong {
  display: block;
  margin-bottom: 6px;
  font-size: 22px;
}

.auth-highlight span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.auth-panel-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
}

.auth-panel {
  width: 100%;
  max-width: 480px;
  padding: 34px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.auth-panel--wide {
  max-width: 560px;
}

.auth-panel-header {
  margin-bottom: 28px;
}

.auth-panel-label {
  display: inline-block;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #ede9fe;
  color: #6d28d9;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.auth-panel-header h2 {
  margin: 0 0 10px;
  font-size: 32px;
  line-height: 1.15;
  color: #0f172a;
}

.auth-panel-header p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.auth-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.auth-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.auth-field label {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
}

.auth-input-wrap {
  position: relative;
}

.auth-input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  pointer-events: none;
}

.auth-input,
.auth-input-wrap input {
  width: 100%;
  min-height: 56px;
  padding: 0 16px 0 52px;
  border-radius: 18px;
  border: 1px solid #dbe3f0;
  background: #f8fafc;
  font-size: 15px;
  color: #0f172a;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
  box-sizing: border-box;
}

.auth-input::placeholder,
.auth-input-wrap input::placeholder {
  color: #94a3b8;
}

.auth-input:focus,
.auth-input-wrap input:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
  background: #fff;
}

.auth-password-toggle {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: #64748b;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  cursor: pointer;
}

.auth-password-toggle:hover {
  background: rgba(148, 163, 184, 0.12);
}

.auth-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 2px;
}

.auth-check {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #475569;
}

.auth-check input {
  width: 16px;
  height: 16px;
  accent-color: #7c3aed;
}

.auth-link,
.auth-meta a,
.auth-footer a {
  color: #6d28d9;
  font-weight: 700;
  text-decoration: none;
}

.auth-link:hover,
.auth-meta a:hover,
.auth-footer a:hover {
  text-decoration: underline;
}

.auth-submit {
  min-height: 56px;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  box-shadow: 0 20px 38px rgba(124, 58, 237, 0.28);
}

.auth-submit:hover {
  transform: translateY(-1px);
}

.auth-submit:disabled {
  opacity: 0.7;
  cursor: wait;
  transform: none;
}

.auth-divider {
  position: relative;
  text-align: center;
  margin: 4px 0;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 700;
}

.auth-divider::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 1px solid #e2e8f0;
}

.auth-divider span {
  position: relative;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.94);
}

.auth-alt-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.auth-secondary-btn {
  min-height: 52px;
  border-radius: 16px;
  border: 1px solid #dbe3f0;
  background: #fff;
  color: #334155;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
}

.auth-secondary-btn:hover {
  background: #f8fafc;
}

.auth-message {
  border-radius: 18px;
  padding: 14px 16px;
  font-size: 14px;
  line-height: 1.6;
  border: 1px solid transparent;
}

.auth-message.success {
  background: #ecfdf5;
  border-color: #a7f3d0;
  color: #047857;
}

.auth-message.error {
  background: #fef2f2;
  border-color: #fecaca;
  color: #b91c1c;
}

.auth-footer {
  margin-top: 4px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}

.auth-hero-footer {
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.auth-hero-footer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  font-size: 18px;
  font-weight: 700;
}

@media (max-width: 1080px) {
  .auth-shell {
    grid-template-columns: 1fr;
  }

  .auth-showcase {
    min-height: auto;
    padding-bottom: 24px;
  }

  .auth-panel-wrap {
    min-height: auto;
    padding-top: 0;
  }
}

@media (max-width: 720px) {
  .auth-showcase,
  .auth-panel-wrap {
    padding: 20px;
  }

  .auth-panel {
    padding: 24px;
    border-radius: 24px;
  }

  .auth-grid,
  .auth-highlights,
  .auth-alt-actions {
    grid-template-columns: 1fr;
  }

  .auth-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;

const API_BASE =
  window.location.port === "5173" || window.location.port === "4173"
    ? "http://localhost:3000"
    : "";

function withApiBase(url) {
  if (!url) return API_BASE;
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url}`;
}

async function apiRequest(url, options = {}) {
  const isFormData = options.body instanceof FormData;

  const response = await fetch(withApiBase(url), {
    credentials: "include",
    headers: isFormData
      ? options.headers || {}
      : {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
    cache: "no-store",
    ...options,
  });

  const text = await response.text();
  let data;

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = text;
  }

  if (!response.ok) {
    throw new Error((data && data.message) || data || "Có lỗi xảy ra");
  }

  return data;
}

function ShowcasePanel() {
  const stats = useMemo(
    () => [
      { value: "24/7", label: "Hỗ trợ khách hàng liên tục" },
      { value: "100%", label: "Đồng bộ tài khoản và đơn hàng" },
      { value: "Nhanh", label: "Đăng nhập và mua sắm mượt mà" },
    ],
    [],
  );

  return (
    <section className="auth-showcase">
      <div>
        <div className="auth-brand">
          <span className="auth-brand-badge">K</span>
          <span>KINGSPORT</span>
        </div>

        <div className="auth-copy">
          <span className="auth-eyebrow">Trải nghiệm mua sắm hiện đại</span>
          <h1 className="auth-title">Chào mừng bạn quay lại.</h1>
          <p className="auth-description">
            Đăng nhập để theo dõi đơn hàng, tích điểm thành viên, lưu giỏ hàng
            và nhận ưu đãi cá nhân hóa như các nền tảng thương mại điện tử lớn.
          </p>
        </div>
      </div>

      <div className="auth-highlights">
        {stats.map((item) => (
          <div className="auth-highlight" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="auth-hero-footer">
        <span className="auth-hero-footer-avatar">★</span>
        <div>
          <strong>Không gian đăng nhập mới</strong>
          <div>Bố cục gọn, sang và dễ thao tác hơn.</div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ off = false }) {
  return off ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6A3 3 0 0 0 13.4 13.4" />
      <path d="M9.9 5.1A10.7 10.7 0 0 1 12 4c5.5 0 9.5 4.3 10.7 8-0.5 1.6-1.6 3.4-3.2 4.9" />
      <path d="M6.2 6.2C4.5 7.6 3.4 9.5 2.8 12c0.9 2.8 3.4 6 7.7 7.5" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M1.5 12S5.5 4 12 4s10.5 8 10.5 8-4 8-10.5 8S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let active = true;

    async function bootstrap() {
      try {
        const currentUser = await apiRequest("/api/v1/auth/me");

        if (!active || !currentUser) return;

        navigate(currentUser.role?.name === "ADMIN" ? "/admin" : "/", {
          replace: true,
        });
      } catch {
        if (
          active &&
          new URLSearchParams(location.search).get("registered") === "1"
        ) {
          setMessage({
            type: "success",
            text: "Đăng ký thành công. Mời bạn đăng nhập để tiếp tục.",
          });
        }
      }
    }

    bootstrap();

    return () => {
      active = false;
    };
  }, [location.search, navigate]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const result = await apiRequest("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const nextUrl = result.user?.role?.name === "ADMIN" ? "/admin" : "/";
      navigate(nextUrl, { replace: true });
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Đăng nhập thất bại.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <style>{AUTH_STYLES}</style>

      <main className="auth-shell">
        <ShowcasePanel />

        <section className="auth-panel-wrap">
          <div className="auth-panel">
            <div className="auth-panel-header">
              <span className="auth-panel-label">Đăng nhập tài khoản</span>
              <h2>Tiếp tục với tài khoản của bạn</h2>
              <p>
                Quản lý đơn hàng, điểm thưởng và thông tin cá nhân trong một nơi
                duy nhất.
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-field">
                <label htmlFor="username">Tên đăng nhập</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <MailIcon />
                  </span>
                  <input
                    id="username"
                    name="username"
                    placeholder="Nhập tên đăng nhập"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <label htmlFor="password">Mật khẩu</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <LockIcon />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="auth-password-toggle"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    <EyeIcon off={showPassword} />
                  </button>
                </div>
              </div>

              <div className="auth-meta">
                <label className="auth-check">
                  <input type="checkbox" defaultChecked />
                  <span>Giữ đăng nhập</span>
                </label>

                <Link to="/register" className="auth-link">
                  Chưa có tài khoản?
                </Link>
              </div>

              {message ? (
                <div className={`auth-message ${message.type}`}>
                  {message.text}
                </div>
              ) : null}

              <button
                className="auth-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Đang đăng nhập..." : "Đăng nhập ngay"}
              </button>

              <div className="auth-divider">
                <span>Hoặc</span>
              </div>

              <div className="auth-alt-actions">
                <Link className="auth-secondary-btn" to="/register">
                  Tạo tài khoản mới
                </Link>
                <Link className="auth-secondary-btn" to="/">
                  Về trang chủ
                </Link>
              </div>
            </form>

            <div className="auth-footer">
              Bằng việc đăng nhập, bạn đồng ý với điều khoản sử dụng và chính
              sách bảo mật của KINGSPORT.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}