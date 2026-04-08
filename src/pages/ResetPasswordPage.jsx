import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AUTH_STYLES = `
.auth-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(320px, 1.1fr) minmax(420px, 0.9fr);
  background:
    linear-gradient(135deg, rgba(16, 24, 40, 0.86), rgba(236, 72, 153, 0.7)),
    url('/images/banner-fit-3.jpg') center/cover no-repeat;
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
.auth-copy { max-width: 560px; }
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
  background: linear-gradient(180deg, #fff7ed 0%, #f5f3ff 100%);
}
.auth-panel {
  width: 100%;
  max-width: 520px;
  padding: 34px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.18);
}
.auth-panel-label {
  display: inline-block;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #fce7f3;
  color: #be185d;
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
  margin: 0 0 28px;
  font-size: 15px;
  line-height: 1.7;
  color: #64748b;
}
.auth-form {
  display: flex;
  flex-direction: column;
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
.auth-input-wrap { position: relative; }
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
.auth-input-wrap input {
  width: 100%;
  min-height: 56px;
  padding: 0 52px 0 52px;
  border-radius: 18px;
  border: 1px solid #dbe3f0;
  background: #f8fafc;
  font-size: 15px;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  box-sizing: border-box;
}
.auth-input-wrap input:focus {
  border-color: #ec4899;
  box-shadow: 0 0 0 4px rgba(236, 72, 153, 0.14);
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
.auth-password-toggle:hover { background: rgba(148, 163, 184, 0.12); }
.auth-submit {
  min-height: 56px;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, #ec4899 0%, #7c3aed 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 20px 38px rgba(236, 72, 153, 0.24);
}
.auth-submit:disabled { opacity: 0.7; cursor: wait; }
.auth-message {
  border-radius: 18px;
  padding: 14px 16px;
  font-size: 14px;
  line-height: 1.6;
  border: 1px solid transparent;
}
.auth-message.success { background: #ecfdf5; border-color: #a7f3d0; color: #047857; }
.auth-message.error { background: #fef2f2; border-color: #fecaca; color: #b91c1c; }
.auth-footer {
  margin-top: 18px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}
.auth-footer a { color: #7c3aed; font-weight: 700; text-decoration: none; }
.auth-footer a:hover { text-decoration: underline; }
@media (max-width: 1080px) {
  .auth-shell { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .auth-showcase, .auth-panel-wrap { padding: 20px; }
  .auth-panel { padding: 24px; border-radius: 24px; }
  .auth-highlights { grid-template-columns: 1fr; }
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
  const response = await fetch(withApiBase(url), {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
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

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ off = false }) {
  return off ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6A3 3 0 0 0 13.4 13.4" />
      <path d="M9.9 5.1A10.7 10.7 0 0 1 12 4c5.5 0 9.5 4.3 10.7 8-0.5 1.6-1.6 3.4-3.2 4.9" />
      <path d="M6.2 6.2C4.5 7.6 3.4 9.5 2.8 12c0.9 2.8 3.4 6 7.7 7.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M1.5 12S5.5 4 12 4s10.5 8 10.5 8-4 8-10.5 8S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShowcasePanel() {
  const stats = [
    { value: "Bảo mật", label: "Mỗi liên kết chỉ dùng trong thời gian ngắn" },
    { value: "6+ ký tự", label: "Mật khẩu mới cần đủ mạnh hơn" },
    { value: "Tức thì", label: "Đổi xong có thể đăng nhập lại ngay" },
  ];

  return (
    <section className="auth-showcase">
      <div>
        <div className="auth-brand">
          <span className="auth-brand-badge">K</span>
          <span>KINGSPORT</span>
        </div>
        <div className="auth-copy">
          <span className="auth-eyebrow">Đặt lại thông tin đăng nhập</span>
          <h1 className="auth-title">Tạo mật khẩu mới an toàn.</h1>
          <p className="auth-description">
            Chọn một mật khẩu mới để bảo vệ tài khoản, giỏ hàng và lịch sử đơn hàng của bạn.
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
    </section>
  );
}

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [checking, setChecking] = useState(true);
  const [message, setMessage] = useState(null);
  const [tokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    let active = true;

    async function validateToken() {
      try {
        await apiRequest(`/api/v1/auth/resetpassword/${token}`);
        if (!active) return;
        setTokenValid(true);
      } catch (error) {
        if (!active) return;
        setTokenValid(false);
        setMessage({ type: "error", text: error.message || "Liên kết không hợp lệ hoặc đã hết hạn." });
      } finally {
        if (active) setChecking(false);
      }
    }

    validateToken();
    return () => {
      active = false;
    };
  }, [token]);

  const passwordsMatch = useMemo(
    () => !form.confirmPassword || form.password === form.confirmPassword,
    [form.confirmPassword, form.password],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!passwordsMatch) {
      setMessage({ type: "error", text: "Mật khẩu xác nhận chưa khớp." });
      return;
    }

    setSubmitting(true);
    setMessage(null);
    try {
      const result = await apiRequest(`/api/v1/auth/resetpassword/${token}`, {
        method: "POST",
        body: JSON.stringify({ password: form.password }),
      });
      setMessage({ type: "success", text: result.message || "Đổi mật khẩu thành công." });
      setTimeout(() => navigate("/login", { replace: true }), 1600);
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Không thể đổi mật khẩu." });
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
              <span className="auth-panel-label">Đặt lại mật khẩu</span>
              <h2>Mật khẩu mới cho tài khoản</h2>
              <p>Tạo mật khẩu mới để tiếp tục đăng nhập và sử dụng tài khoản của bạn.</p>
            </div>

            {checking ? (
              <div className="auth-message success">Đang kiểm tra liên kết đổi mật khẩu...</div>
            ) : (
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                  <label htmlFor="password">Mật khẩu mới</label>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon">
                      <LockIcon />
                    </span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu mới"
                      value={form.password}
                      onChange={handleChange}
                      minLength={6}
                      required
                      disabled={!tokenValid}
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

                <div className="auth-field">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                  <div className="auth-input-wrap">
                    <span className="auth-input-icon">
                      <LockIcon />
                    </span>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      placeholder="Nhập lại mật khẩu mới"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      minLength={6}
                      required
                      disabled={!tokenValid}
                    />
                    <button
                      className="auth-password-toggle"
                      type="button"
                      onClick={() => setShowConfirm((prev) => !prev)}
                      aria-label={showConfirm ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    >
                      <EyeIcon off={showConfirm} />
                    </button>
                  </div>
                </div>

                {!passwordsMatch ? (
                  <div className="auth-message error">Mật khẩu xác nhận chưa khớp.</div>
                ) : null}

                {message ? <div className={`auth-message ${message.type}`}>{message.text}</div> : null}

                <button className="auth-submit" type="submit" disabled={submitting || !tokenValid}>
                  {submitting ? "Đang cập nhật..." : "Lưu mật khẩu mới"}
                </button>
              </form>
            )}

            <div className="auth-footer">
              <Link to="/login">Quay lại đăng nhập</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
