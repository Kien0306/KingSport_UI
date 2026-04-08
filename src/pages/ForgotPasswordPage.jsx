import React, { useState } from "react";
import { Link } from "react-router-dom";

const AUTH_STYLES = `
.auth-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(320px, 1.1fr) minmax(420px, 0.9fr);
  background:
    linear-gradient(135deg, rgba(16, 24, 40, 0.86), rgba(37, 99, 235, 0.72)),
    url('/images/banner-fit-2.jpg') center/cover no-repeat;
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
  background: linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%);
}
.auth-panel {
  width: 100%;
  max-width: 500px;
  padding: 34px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.18);
}
.auth-panel-header { margin-bottom: 28px; }
.auth-panel-label {
  display: inline-block;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
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
  padding: 0 16px 0 52px;
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
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
  background: #fff;
}
.auth-input-wrap input::placeholder { color: #94a3b8; }
.auth-submit {
  min-height: 56px;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 20px 38px rgba(37, 99, 235, 0.24);
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
.auth-footer a { color: #2563eb; font-weight: 700; text-decoration: none; }
.auth-footer a:hover { text-decoration: underline; }
@media (max-width: 1080px) {
  .auth-shell { grid-template-columns: 1fr; }
  .auth-panel-wrap { min-height: auto; }
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

function ShowcasePanel() {
  const stats = [
    { value: "10 phút", label: "Liên kết đổi mật khẩu hết hạn nhanh" },
    { value: "Email", label: "Gửi hướng dẫn trực tiếp tới hộp thư" },
    { value: "An toàn", label: "Chỉ đổi được khi có liên kết hợp lệ" },
  ];

  return (
    <section className="auth-showcase">
      <div>
        <div className="auth-brand">
          <span className="auth-brand-badge">K</span>
          <span>KINGSPORT</span>
        </div>
        <div className="auth-copy">
          <span className="auth-eyebrow">Khôi phục tài khoản nhanh</span>
          <h1 className="auth-title">Quên mật khẩu?</h1>
          <p className="auth-description">
            Nhập email đã đăng ký. Hệ thống sẽ gửi cho bạn một liên kết an toàn để đặt lại mật khẩu mới.
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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const result = await apiRequest("/api/v1/auth/forgotpassword", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setMessage({ type: "success", text: result.message || "Vui lòng kiểm tra email để đổi mật khẩu." });
      setEmail("");
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Không gửi được email." });
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
              <span className="auth-panel-label">Quên mật khẩu</span>
              <h2>Nhận liên kết đổi mật khẩu</h2>
              <p>Nhập email bạn đã dùng để đăng ký tài khoản. Chúng tôi sẽ gửi hướng dẫn đổi mật khẩu về hộp thư của bạn.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-field">
                <label htmlFor="email">Email đăng ký</label>
                <div className="auth-input-wrap">
                  <span className="auth-input-icon">
                    <MailIcon />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              {message ? <div className={`auth-message ${message.type}`}>{message.text}</div> : null}

              <button className="auth-submit" type="submit" disabled={submitting}>
                {submitting ? "Đang gửi email..." : "Gửi liên kết đổi mật khẩu"}
              </button>
            </form>

            <div className="auth-footer">
              <Link to="/login">Quay lại đăng nhập</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
