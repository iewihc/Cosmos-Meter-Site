"use client";
import Image from "next/image";
import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
        fontFamily: "Noto Sans TC, Segoe UI, Arial, sans-serif",
        margin: 0,
      }}
    >
      {/* 導覽列 */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 5vw",
          background: "rgba(30,30,30,0.97)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(192, 125, 109, 0.3)",
        }}
      >
        <Link
          href="/taipei-meter"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <Image
            src="/Taipei-Meter icon.png"
            alt="Taipei Meter Logo"
            width={48}
            height={48}
            style={{ borderRadius: 12, background: "#1a1a1a" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            Taipei Meter
          </span>
        </Link>
      </nav>

      {/* 內容區 */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 5vw",
        }}
      >
        {/* 標題區塊 */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: 48,
              fontWeight: 900,
              marginBottom: 16,
              letterSpacing: 1,
              textShadow: "0 2px 12px rgba(192, 125, 109, 0.3)",
            }}
          >
            刪除帳號
          </h1>
          <h2
            style={{
              color: "#C07D6D",
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: 0.5,
            }}
          >
            Delete Account
          </h2>
        </div>

        {/* 內容卡片 */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: 24,
            padding: "48px",
            border: "1px solid rgba(192, 125, 109, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 24,
              letterSpacing: 0.5,
            }}
          >
            如何刪除您的帳號與相關資料
          </h3>
          <p
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 16,
              letterSpacing: 0.3,
            }}
          >
            How to Delete Your Account and Related Data
          </p>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            若要請求刪除您的帳號及所有相關資料：
          </p>

          {/* 步驟列表 */}
          <ol
            style={{
              color: "#cbd5e1",
              fontSize: 18,
              lineHeight: 1.8,
              paddingLeft: 24,
              marginBottom: 40,
            }}
          >
            <li style={{ marginBottom: 16 }}>
              開啟應用程式並使用您註冊的電子郵件登入
              <br />
              <span style={{ color: "#94a3b8", fontSize: 16 }}>
                Open the app and log in with your registered email.
              </span>
            </li>
            <li style={{ marginBottom: 16 }}>
              前往<strong style={{ color: "#C07D6D" }}>「設定」</strong>頁面
              <br />
              <span style={{ color: "#94a3b8", fontSize: 16 }}>
                Go to the <strong>Settings</strong> page.
              </span>
            </li>
            <li style={{ marginBottom: 16 }}>
              點擊<strong style={{ color: "#C07D6D" }}>「刪除帳號」</strong>
              <br />
              <span style={{ color: "#94a3b8", fontSize: 16 }}>
                Tap on <strong>Delete Account</strong>.
              </span>
            </li>
            <li style={{ marginBottom: 16 }}>
              確認操作
              <br />
              <span style={{ color: "#94a3b8", fontSize: 16 }}>
                Confirm the action.
              </span>
            </li>
          </ol>

          {/* 重要提醒區塊 */}
          <div
            style={{
              background: "rgba(192, 125, 109, 0.1)",
              border: "1px solid rgba(192, 125, 109, 0.3)",
              borderRadius: 16,
              padding: "32px",
              marginBottom: 32,
            }}
          >
            <h4
              style={{
                color: "#C07D6D",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: 0.5,
              }}
            >
              刪除後：Once deleted:
            </h4>
            <ul
              style={{
                color: "#cbd5e1",
                fontSize: 17,
                lineHeight: 1.8,
                paddingLeft: 24,
                listStyle: "none",
              }}
            >
              <li
                style={{
                  marginBottom: 16,
                  position: "relative",
                  paddingLeft: 28,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#C07D6D",
                    fontWeight: 700,
                  }}
                >
                  •
                </span>
                您的帳號與個人資料將被永久移除
                <br />
                <span style={{ color: "#94a3b8", fontSize: 15 }}>
                  Your account and personal data will be permanently removed.
                </span>
              </li>
              <li
                style={{
                  marginBottom: 16,
                  position: "relative",
                  paddingLeft: 28,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#C07D6D",
                    fontWeight: 700,
                  }}
                >
                  •
                </span>
                我們<strong style={{ color: "#fff" }}>不會</strong>
                保留任何使用者資訊
                <br />
                <span style={{ color: "#94a3b8", fontSize: 15 }}>
                  We do <strong>not</strong> retain any user information beyond
                  this action.
                </span>
              </li>
              <li style={{ position: "relative", paddingLeft: 28 }}>
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#ef4444",
                    fontWeight: 700,
                  }}
                >
                  •
                </span>
                刪除操作<strong style={{ color: "#ef4444" }}>無法復原</strong>
                <br />
                <span style={{ color: "#94a3b8", fontSize: 15 }}>
                  Deletion is <strong>irreversible</strong>.
                </span>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div
            style={{
              textAlign: "center",
              padding: "24px",
              background: "rgba(192, 125, 109, 0.05)",
              borderRadius: 12,
            }}
          >
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              如果您遇到任何問題，請聯絡我們：
              <br />
              <span style={{ fontSize: 15, color: "#94a3b8" }}>
                If you encounter any issues, please contact us at:
              </span>
            </p>
            <a
              href="mailto:mr.chi.service@gmail.com"
              style={{
                color: "#C07D6D",
                fontSize: 18,
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              mr.chi.service@gmail.com
            </a>
          </div>
        </div>

        {/* 返回首頁按鈕 */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link
            href="/taipei-meter"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #C07D6D 60%, #FBCEBB 100%)",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 16,
              padding: "16px 48px",
              fontSize: 18,
              letterSpacing: 0.5,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(192, 125, 109, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(192, 125, 109, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(192, 125, 109, 0.3)";
            }}
          >
            返回首頁
          </Link>
        </div>
      </main>

      {/* 底部聯絡資訊 */}
      <footer
        style={{
          width: "100%",
          background: "#252525",
          color: "#cbd5e1",
          textAlign: "center",
          fontSize: 16,
          borderTop: "1px solid #334155",
          padding: "32px 0",
          marginTop: 80,
        }}
      >
        <div>
          聯絡我們：mr.chi.service@gmail.com ｜{" "}
          <a
            href="https://page.line.me/158naoyg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C07D6D", textDecoration: "underline" }}
          >
            Taipei Meter 官方 LINE
          </a>
        </div>
        <div style={{ marginTop: "16px" }}>
          <Link
            href="/taipei-meter/privacy"
            style={{
              color: "#C07D6D",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            隱私權政策
          </Link>
          <span style={{ margin: "0 8px", color: "#64748b" }}>｜</span>
          <Link
            href="/taipei-meter/terms"
            style={{
              color: "#C07D6D",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            使用者條款
          </Link>
          <span style={{ margin: "0 8px", color: "#64748b" }}>｜</span>
          <Link
            href="/taipei-meter/delete"
            style={{
              color: "#C07D6D",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            刪除帳號
          </Link>
        </div>
        <div style={{ marginTop: "16px", fontSize: 14, color: "#9ca3af" }}>
          © 2025 季先生科技@版權所有 All Rights Reserved
        </div>
      </footer>

      {/* 浮動 Line 聯絡按鈕 */}
      <a
        href="https://page.line.me/158naoyg"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(6, 199, 86, 0.59)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          cursor: "pointer",
          border: "none",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(6, 199, 85, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(6, 199, 85, 0.4)";
        }}
      >
        <Image
          src="/line.png"
          alt="Line 聯絡我們"
          width={64}
          height={64}
          style={{
            display: "block",
            borderRadius: "50%",
          }}
        />
      </a>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        /* 手機版 (768px 以下) */
        @media (max-width: 768px) {
          nav {
            padding: 18px 4vw !important;
          }

          nav span {
            font-size: 18px !important;
          }

          main {
            padding: 40px 4vw !important;
          }

          main h1 {
            font-size: 36px !important;
          }

          main h2 {
            font-size: 24px !important;
          }

          main > div:nth-child(2) {
            padding: 32px 24px !important;
          }

          main h3 {
            font-size: 24px !important;
          }

          main p,
          main ol,
          main ul {
            font-size: 16px !important;
          }

          footer {
            font-size: 14px !important;
            padding: 24px 4vw !important;
          }

          a[href*="line.me"] {
            bottom: 16px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
          }

          a[href*="line.me"] img {
            width: 56px !important;
            height: 56px !important;
          }
        }

        /* 小型手機 (480px 以下) */
        @media (max-width: 480px) {
          main h1 {
            font-size: 32px !important;
          }

          main h2 {
            font-size: 20px !important;
          }

          main > div:nth-child(2) {
            padding: 24px 20px !important;
          }

          main h3 {
            font-size: 20px !important;
          }

          main h4 {
            font-size: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}

