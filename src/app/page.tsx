"use client";
import Image from "next/image";
import Link from "next/link";

const googlePlaySvg =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreSvg =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
          background: "rgba(17,24,39,0.97)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 8px #0ea5e93a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/cosmos-meter-logo.png"
            alt="Cosmos Meter Logo"
            width={48}
            height={48}
            style={{ borderRadius: 12, background: "#111" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            Cosmos Meter
          </span>
        </div>
       
      </nav>

      {/* Hero 區塊 */}
      <section
        className="hero-section"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10rem",
          padding: "0 3vw",
        }}
      >
        {/* 左側手機區域 */}
        <div
          className="phone-container"
          style={{
            position: "relative",
            width: "350px",
            height: "700px",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "-3rem",
          }}
        >
          {/* iPhone 16 外殼 */}
          <div
            className="iphone-16-frame"
            style={{
              position: "relative",
              width: "280px",
              height: "580px",
              background: "linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))",
              borderRadius: "45px",
              padding: "8px",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 0, 0, 0)",
              border: "1px solid #333",
            }}
          >
            {/* 螢幕區域 */}
            <div
              className="phone-screen"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                background: "#000",
                borderRadius: "37px",
                overflow: "hidden",
                border: "2px solid #1a1a1a",
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "28px",
                  background: "#000",
                  borderRadius: "14px",
                  zIndex: 10,
                  border: "1px solid #333",
                }}
              ></div>

              {/* 影片播放區域 */}
              <div
                className="video-area"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* 實際影片元素 */}
                <video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    borderRadius: "35px",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  onLoadedData={(e) => {
                    const fallback = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "none";
                  }}
                >
                  <source src="/demo-video.MP4" type="video/MP4" />
                </video>

                {/* 影片載入失敗時的備用圖片 */}
                <div
                  id="video-fallback"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 0,
                    borderRadius: "35px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/Backup-for-video.png"
                    alt="Cosmos Meter 備用圖片"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "35px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 左側按鈕 */}
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "130px",
                width: "5px",
                height: "40px",
                background: "#333",
                borderRadius: "8px 0 0 8px",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "180px",
                width: "5px",
                height: "30px",
                background: "#333",
                borderRadius: "6px 0 0 6px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "220px",
                width: "5px",
                height: "30px",
                background: "#333",
                borderRadius: "6px 0 0 6px",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                right: "-4px",
                top: "160px",
                width: "5px",
                height: "65px",
                background: "#333",
                borderRadius: "0 8px 8px 0",
              }}
            ></div>
          </div>
        </div>

        {/* 右側內容區域 */}
        <div
          className="hero-content-area"
          style={{
            flex: 1,
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1rem",
            marginLeft: "-2rem",
          }}
        >
          <Image
            src="/cosmos-meter-logo.png"
            alt="Cosmos Meter Logo"
            width={140}
            height={140}
            style={{
              borderRadius: 40,
              background: "#111",
              marginBottom: 18,
              boxShadow: "0 4px 32px #0ea5e93a",
            }}
          />
          <h1
            style={{
              color: "#fff",
              fontSize: 54,
              fontWeight: 900,
              margin: "0 0 18px 0",
              letterSpacing: 2,
              textShadow: "0 2px 12px #0ea5e980",
              textAlign: "center",
            }}
          >
            跳錶新革命
          </h1>
          <h1
            style={{
              color: "#fff",
              fontSize: 45,
              fontWeight: 900,
              margin: "0 0 18px 0",
              letterSpacing: 2,
              textShadow: "0 2px 12px #0ea5e980",
              textAlign: "center",
            }}
          >
            Cosmos Meter - 藍錶
          </h1>
          <div
            className="hero-subtitle"
            style={{
              color: "#fff",
              fontSize: 30,
              marginBottom: 24,
              fontWeight: 500,
              textShadow: "0 2px 8px #0ea5e950",
              textAlign: "center",
            }}
          >
            精準里程 • 安心收費
          </div>
          <button
            onClick={() => {
              document.getElementById('pricing-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            style={{
              background: "linear-gradient(90deg, #0EA5E9 60%, #38bdf8 100%)",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 32,
              padding: "20px 56px",
              border: "none",
              fontSize: 22,
              letterSpacing: 1,
              boxShadow: "0 6px 20px rgba(14, 165, 233, 0.25), 0 2px 8px rgba(14, 165, 233, 0.15)",
              margin: "18px 0 0 0",
              transition: "all 0.3s ease",
              display: "inline-block",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(14, 165, 233, 0.35), 0 4px 12px rgba(14, 165, 233, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(14, 165, 233, 0.25), 0 2px 8px rgba(14, 165, 233, 0.15)";
            }}
          >
            開啟你的旅程
          </button>
        </div>
      </section>

      {/* 手機版專用影片區塊 */}
      <section
        className="mobile-video-section"
        style={{
          width: "100%",
          padding: "2rem 4vw",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div
          className="mobile-phone-container"
          style={{
            position: "relative",
            width: "240px",
            height: "480px",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* iPhone 16 外殼 */}
          <div
            className="mobile-iphone-frame"
            style={{
              position: "relative",
              width: "200px",
              height: "400px",
              background: "linear-gradient(145deg,rgb(0, 0, 0),rgb(0, 0, 0))",
              borderRadius: "32px",
              padding: "6px",
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0, 0, 0, 0)",
              border: "1px solid #333",
            }}
          >
            {/* 螢幕區域 */}
            <div
              className="mobile-phone-screen"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                background: "#000",
                borderRadius: "26px",
                overflow: "hidden",
                border: "1px solid #1a1a1a",
              }}
            >
              {/* Dynamic Island - 手機版較小 */}
              <div
                className="mobile-dynamic-island"
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "50px",
                  height: "16px",
                  background: "#000",
                  borderRadius: "8px",
                  zIndex: 10,
                  border: "1px solid #333",
                }}
              ></div>

              {/* 影片播放區域 */}
              <div
                className="mobile-video-area"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* 實際影片元素 */}
                <video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    borderRadius: "24px",
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  onLoadedData={(e) => {
                    const fallback = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "none";
                  }}
                >
                  <source src="/demo-video.MP4" type="video/MP4" />
                </video>

                {/* 影片載入失敗時的備用內容 */}
                <div
                  className="mobile-video-fallback"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#000",
                    fontSize: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    padding: "15px",
                    zIndex: 0,
                    borderRadius: "24px",
                  }}
                >
                  
                </div>
              </div>
            </div>

            {/* 按鈕區域 - 縮小版 */}
            <div
              style={{
                position: "absolute",
                left: "-3px",
                top: "60px",
                width: "3px",
                height: "28px",
                background: "#333",
                borderRadius: "6px 0 0 6px",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                left: "-3px",
                top: "95px",
                width: "3px",
                height: "20px",
                background: "#333",
                borderRadius: "4px 0 0 4px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "-3px",
                top: "120px",
                width: "3px",
                height: "20px",
                background: "#333",
                borderRadius: "4px 0 0 4px",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                right: "-3px",
                top: "80px",
                width: "3px",
                height: "45px",
                background: "#333",
                borderRadius: "0 6px 6px 0",
              }}
            ></div>
          </div>
        </div>

        {/* 手機版下載區 */}
        <div className="mobile-download-section">
          <div className="mobile-download-title">
            下載連結
          </div>
          <div className="mobile-download-btn-row">
            <div
              className="mobile-download-btn"
              style={{
                background: "#6b7280",
                cursor: "not-allowed",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={googlePlaySvg}
                alt="Google Play 下載"
                style={{
                  height: 48,
                  width: "auto",
                  display: "block",
                  filter: "grayscale(80%)",
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  background: "rgb(255, 255, 255)",
                  color: "#0ea5e9",
                  padding: "2px 8px",
                  borderRadius: 15,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                聯繫Line客服
              </div>
            </div>
            <a
              href="https://apps.apple.com/tw/app/cosmos-meter/id6748606630"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-download-btn"
            >
              <img
                src={appStoreSvg}
                alt="App Store 下載"
              />
            </a>
          </div>
        </div>
      </section>

      {/* 下載區 */}
      <section
        style={{
          width: "100%",
          background: "#111827",
          padding: "48px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 24,
          }}
        >
          下載連結
        </div>
        <div className="download-btn-row">
          <div
            className="download-btn"
            style={{
              background: "#6b7280",
              cursor: "not-allowed",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={googlePlaySvg}
              alt="Google Play 下載"
              style={{
                height: 56,
                width: "auto",
                display: "block",
                filter: "grayscale(80%)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                background: "rgb(255, 255, 255)",
                color: "#0ea5e9",
                padding: "4px 12px",
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              聯繫Line客服
            </div>
          </div>
          <a
            href="https://apps.apple.com/tw/app/cosmos-meter/id6748606630"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <img
              src={appStoreSvg}
              alt="App Store 下載"
              style={{ height: 56, width: "auto", display: "block" }}
            />
          </a>
        </div>
        
      </section>

      {/* 購買區 */}
      <section
        id="pricing-section"
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "80px 5vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景裝飾 */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* 標題 */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 48,
                fontWeight: 900,
                marginBottom: 16,
                letterSpacing: 1,
                textShadow: "0 2px 12px rgba(14, 165, 233, 0.3)",
              }}
            >
              選擇您的方案
            </h2>
           
          </div>

          {/* 價格卡片區域 */}
          <div
            className="pricing-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* 付費好處說明 */}
            <div
              className="benefits-section"
              style={{
                flex: "0 0 auto",
                maxWidth: "300px",
                marginRight: "20px",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: 700,
                  marginBottom: 24,
                  letterSpacing: 0.5,
                }}
              >
                付費可享有:
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    無插頁式廣告
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    歷史行程記錄永久保存
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >實時顯示的子母小地圖
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    自動截圖收費紀錄/截圖按鈕
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    ></div>
                    <span
                      style={{
                        color: "#cbd5e1",
                        fontSize: 20,
                        lineHeight: 1.5,
                      }}
                    >
                      進階錶種設定
                    </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#cbd5e1",
                      fontSize: 20,
                      lineHeight: 1.5,
                    }}
                  >
                    AI識圖計算費用
                  </span>
                </div>
              </div>
            </div>

            {/* 官網優惠方案 */}
            <div
              className="pricing-card"
              style={{
                background: "linear-gradient(145deg, rgba(14, 165, 233, 0.2), rgba(14, 165, 233, 0.1))",
                border: "2px solid rgba(14, 165, 233, 0.3)",
                borderRadius: 24,
                padding: "40px 32px",
                width: "450px",
                maxWidth: "90vw",
                position: "relative",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(14, 165, 233, 0.2)",
                flex: "0 0 auto",
              }}
            >
              {/* 推薦標籤 */}
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                  color: "#fff",
                  padding: "8px 24px",
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  boxShadow: "0 4px 16px rgba(14, 165, 233, 0.3)",
                }}
              >
                官網限定優惠
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginBottom: "32px",
                  marginTop: "12px",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 12,
                    letterSpacing: 0.5,
                  }}
                >
                  官網價 9折
                </h3>
                <div
                  style={{
                    color: "#7dd3fc",
                    fontSize: 16,
                    marginBottom: 24,
                    fontWeight: 600,
                  }}
                >
                  享受最優惠價格
                </div>
              </div>

              {/* 月費方案 */}
              <div
                style={{
                  background: "rgba(14, 165, 233, 0.1)",
                  borderRadius: 16,
                  padding: "24px",
                  marginBottom: "20px",
                  border: "1px solid rgba(14, 165, 233, 0.2)",
                  position: "relative",
                }}
              >
                {/* 左上角：原價 */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "12px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#ef4444",
                      fontSize: 22,
                      fontWeight: 500,
                    }}
                  >
                    原價
                  </span>
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: 25,
                      fontWeight: 700,
                      opacity: 0.8,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    280
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "120%",
                        height: "2px",
                        background: "#ef4444",
                        opacity: 0.7,
                        transform: "translate(-50%, -50%) rotate(15deg)",
                        borderRadius: "1px",
                      }}
                    ></span>
                  </span>
                </div>
                
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    marginBottom: 8,
                    position: "relative",
                    marginTop: "32px",
                  }}
                >
                  {/* 中間：優惠價格 (絕對置中) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 48,
                        fontWeight: 900,
                      }}
                    >
                      252
                    </span>
                    <span
                      style={{
                        color: "#cbd5e1",
                        fontSize: 18,
                        marginLeft: 4,
                      }}
                    >
                      /月
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    color: "#7dd3fc",
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  月繳方案
                </div>
              </div>

              {/* 年費方案 */}
              <div
                style={{
                  background: "rgba(14, 165, 233, 0.1)",
                  borderRadius: 16,
                  padding: "24px",
                  marginBottom: "32px",
                  border: "1px solid rgba(14, 165, 233, 0.2)",
                  position: "relative",
                }}
              >
                {/* 左上角：原價 */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "12px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      color: "#ef4444",
                      fontSize: 22,
                      fontWeight: 500,
                    }}
                  >
                    原價
                  </span>
                  <span
                    style={{
                      color: "#94a3b8",
                      fontSize: 25,
                      fontWeight: 700,
                      opacity: 0.8,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    2400
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "120%",
                        height: "2px",
                        background: "#ef4444",
                        opacity: 0.7,
                        transform: "translate(-50%, -50%) rotate(15deg)",
                        borderRadius: "1px",
                      }}
                    ></span>
                  </span>
                </div>
                
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    marginBottom: 8,
                    position: "relative",
                    marginTop: "32px",
                  }}
                >
                  {/* 中間：優惠價格 (絕對置中) */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 48,
                        fontWeight: 900,
                      }}
                    >
                      2160
                    </span>
                    <span
                      style={{
                        color: "#cbd5e1",
                        fontSize: 18,
                        marginLeft: 4,
                      }}
                    >
                      /年
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    color: "#7dd3fc",
                    fontSize: 14,
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 8,
                  }}
                >
                  年繳方案
                </div>
                <div
                  style={{
                    color: "#10b981",
                    fontSize: 18,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  平均 180/月
                </div>
              </div>

              <button
                onClick={() => {
                  document.getElementById('pricing-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 16,
                  padding: "16px 24px",
                  fontSize: 18,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: 0.5,
                  boxShadow: "0 4px 16px rgba(14, 165, 233, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(14, 165, 233, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(14, 165, 233, 0.3)";
                }}
              >
                立即訂閱優惠
              </button>
            </div>
          </div>

          {/* 底部說明文字 */}
          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                fontSize: 16,
                lineHeight: 1.6,
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              有任何問題請洽Cosmos Meter官方LINE，我們將竭誠為您服務。
            </p>
          </div>
        </div>
      </section>

      {/* 產品特色區 */}
      <section
        style={{ width: "100%", background: "#1e293b", padding: "80px 5vw" }}
      >
        {/* 第一組：左側文字，右側圖片 */}
        <div
          className="feature-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            marginBottom: "120px",
            maxWidth: "1200px",
            margin: "0 auto 120px auto",
          }}
        >
          {/* 左側文字內容 */}
          <div className="feature-text" style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: 42,
                fontWeight: 900,
                marginBottom: 24,
                letterSpacing: 1,
              }}
            >
              計費準確度業界領先
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 20,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              跳錶精準，無誤差，支援多種計費方式，讓每一趟行程都安心透明。專業的計費算法確保公平合理的收費標準。
            </p>
            <ul
              style={{
                color: "#cbd5e1",
                fontSize: 18,
                lineHeight: 1.8,
                paddingLeft: 20,
              }}
            >
              <li>精準GPS定位追蹤</li>
              <li>多種計費模式支援</li>
              <li>透明化收費明細</li>
            </ul>
          </div>

          {/* 右側手機截圖 */}
          <div className="feature-image" style={{ flex: "0 0 auto" }}>
            <div
              style={{
                width: "280px",
                height: "600px",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)",
                position: "relative",
                background: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/pic01.jpg"
                alt="Cosmos Meter 計費界面截圖"
                width={280}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* 第二組：左側圖片，右側文字 */}
        <div
          className="feature-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* 左側手機截圖 */}
          <div className="feature-image" style={{ flex: "0 0 auto" }}>
            <div
              style={{
                width: "280px",
                height: "600px",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(240, 147, 251, 0.4)",
                position: "relative",
                background: "#1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/pic02.jpg"
                alt="Cosmos Meter 操作界面 UI 設計截圖"
                width={280}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>

          {/* 右側文字內容 */}
          <div className="feature-text" style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                color: "#fff",
                fontSize: 42,
                fontWeight: 900,
                marginBottom: 24,
                letterSpacing: 1,
              }}
            >
              現代化 UI，操作流暢
            </h3>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 20,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              簡單易用，快速上手，讓司機與乘客都能安心信賴，享受順暢的使用體驗。直覺的操作介面讓每個功能都觸手可及。
            </p>
            <ul
              style={{
                color: "#cbd5e1",
                fontSize: 18,
                lineHeight: 1.8,
                paddingLeft: 20,
              }}
            >
              <li>直覺式操作介面</li>
              <li>快速響應設計</li>
              <li>友善的用戶體驗</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 底部聯絡資訊 */}
      <footer
        style={{
          width: "100%",
          background: "#0f172a",
          color: "#cbd5e1",
          textAlign: "center",
          fontSize: 16,
          borderTop: "1px solid #334155",
          padding: "32px 0",
          marginTop: 0,
        }}
      >
        <div>聯絡我們：mr.chi.service@gmail.com ｜ <a href="https://line.me/R/ti/p/@478umgog" target="_blank" rel="noopener noreferrer" style={{ color: "#0EA5E9", textDecoration: "underline" }}>Cosmos Meter 官方 LINE</a></div>
        <div style={{ marginTop: "16px" }}>
          <Link
            href="/privacy"
            style={{
              color: "#0EA5E9",
              textDecoration: "underline",
              fontSize: 14,
            }}
          >
            隱私權政策
          </Link>
        </div>
        <div style={{ marginTop: "16px", fontSize: 14, color: "#9ca3af" }}>
          © 2025 季先生科技@版權所有 All Rights Reserved
        </div>
      </footer>

      {/* 浮動 Line 聯絡按鈕 */}
      <a
        href="https://line.me/R/ti/p/@478umgog"
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

        .download-btn-row {
          display: flex;
          gap: 24px;
          justify-content: center;
        }

        .download-btn {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px #0ea5e93a;
          background: #111;
          transition: transform 0.1s, box-shadow 0.2s;
        }

        .download-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 24px #0ea5e9cc;
        }

        /* 手機版 (768px 以下) */
        @media (max-width: 768px) {
          nav {
            padding: 18px 4vw !important;
          }

          nav span {
            font-size: 18px !important;
            letter-spacing: 0.5px !important;
          }

          nav div:first-child img {
            width: 44px !important;
            height: 44px !important;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1) !important;
          }

          nav div:last-child {
            gap: 10px !important;
          }

          nav a {
            padding: 8px 18px !important;
            font-size: 14px !important;
            border-radius: 18px !important;
            border-width: 1px !important;
            font-weight: 600 !important;
          }

          .hero-section {
            flex-direction: column !important;
            height: auto !important;
            min-height: 50vh !important;
            gap: 2rem !important;
            padding: 2rem 4vw 1rem 4vw !important;
          }

          .phone-container {
            display: none !important;
          }

          /* 手機版影片區塊和下載區並排容器 */
          .mobile-video-section {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: center !important;
            gap: 2rem !important;
            padding: 2.5rem 4vw !important;
            background: #111827 !important;
            margin-top: 2rem !important;
          }

          /* 影片區塊保持原本大小 */
          .mobile-phone-container {
            flex: 0 0 auto !important;
          }

          .hero-content-area {
            width: 100% !important;
            max-width: 500px !important;
            text-align: center !important;
            margin-left: 0 !important;
            margin-top: 2rem !important;
          }

          .hero-content-area img {
            width: 100px !important;
            height: 100px !important;
            border-radius: 30px !important;
            margin-bottom: 16px !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
          }

          .hero-content-area h1:first-of-type {
            font-size: 36px !important;
            margin-bottom: 14px !important;
            line-height: 1.2 !important;
          }

          .hero-content-area h1:nth-of-type(2) {
            font-size: 32px !important;
            margin-bottom: 18px !important;
            line-height: 1.2 !important;
          }

          .hero-subtitle {
            font-size: 22px !important;
            margin-bottom: 24px !important;
          }

          .hero-content-area div:nth-of-type(4) {
            font-size: 16px !important;
            padding: 10px 24px !important;
            margin-bottom: 24px !important;
            letter-spacing: 0.5px !important;
            line-height: 1.4 !important;
          }

          .hero-content-area button {
            font-size: 20px !important;
            padding: 18px 44px !important;
            border-radius: 30px !important;
            letter-spacing: 0.5px !important;
            margin-top: 16px !important;
          }

          /* 手機版下載區調整 - 並排在影片旁邊 */
          section:nth-of-type(3) {
            display: none !important; /* 隱藏原本的下載區 */
          }

          /* 在手機版影片區塊中添加下載區 */
          .mobile-download-section {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 1 !important;
            min-width: 0 !important;
            max-width: 280px !important;
            text-align: center !important;
            height: 100% !important;
            min-height: 400px !important;
          }

          .mobile-download-title {
            color: #fff !important;
            font-weight: 700 !important;
            font-size: 22px !important;
            margin-bottom: 34px !important;
          }

          .mobile-download-btn-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
            align-items: center !important;
          }

          .mobile-download-btn {
            border-radius: 6px !important;
            overflow: hidden !important;
            box-shadow: 0 4px 16px #0ea5e966 !important;
            background: #111 !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .mobile-download-btn:hover {
            transform: translateY(-2px) scale(1.02) !important;
            box-shadow: 0 6px 24px #0ea5e9aa !important;
          }

          .mobile-download-btn img {
            height: 48px !important;
            width: auto !important;
          }

          .mobile-download-btn.disabled {
            background: #6b7280 !important;
            cursor: not-allowed !important;
          }

          .mobile-download-btn.disabled img {
            filter: grayscale(100%) !important;
            opacity: 0.6 !important;
          }

          .mobile-download-btn .overlay-text {
            position: absolute !important;
            background: rgb(255, 255, 255) !important;
            color: #0ea5e9 !important;
            padding: 2px 8px !important;
            border-radius: 15px !important;
            font-size: 12px !important;
            font-weight: 600 !important;
          }

          section:nth-of-type(3) > div:first-child {
            font-size: 24px !important;
            margin-bottom: 28px !important;
            font-weight: 700 !important;
          }

          .download-btn-row {
            gap: 20px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }

          .download-btn {
            transition: all 0.3s ease !important;
          }

          .download-btn img {
            height: 52px !important;
          }

          section:nth-of-type(3) > div:last-child {
            font-size: 16px !important;
            margin-top: 24px !important;
            line-height: 1.5 !important;
          }

          section:nth-of-type(5) {
            padding: 64px 4vw !important;
          }

          .feature-item {
            flex-direction: column !important;
            gap: 32px !important;
            margin-bottom: 64px !important;
            max-width: 500px !important;
          }

          /* 第一組特色：手機版先圖後文字 */
          .feature-item:first-child {
            flex-direction: column !important;
          }

          .feature-item:first-child .feature-image {
            order: 1 !important;
          }

          .feature-item:first-child .feature-text {
            order: 2 !important;
          }

          .feature-text {
            text-align: center !important;
            min-width: auto !important;
            padding: 0 16px !important;
          }

          .feature-text h3 {
            font-size: 28px !important;
            margin-bottom: 20px !important;
            letter-spacing: 0.5px !important;
            line-height: 1.3 !important;
          }

          .feature-text p {
            font-size: 18px !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
          }

          .feature-text ul {
            font-size: 16px !important;
            line-height: 1.7 !important;
            padding-left: 20px !important;
            text-align: left !important;
            display: inline-block !important;
          }

          .feature-text ul li {
            margin-bottom: 8px !important;
          }

          .feature-image > div {
            width: 240px !important;
            height: auto !important;
            min-height: 400px !important;
            border-radius: 24px !important;
            font-size: 16px !important;
            box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4) !important;
            background: #1a1a1a !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .feature-image > div > div:first-child {
            height: 24px !important;
            padding: 0 12px !important;
            font-size: 10px !important;
          }

          .feature-image > div > div:last-child {
            margin-top: 16px !important;
          }

          .feature-image > div > div:last-child > div:first-child {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }

          .feature-image > div > div:last-child > div:nth-child(2) {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }

          .feature-image > div > div:last-child > div:last-child {
            font-size: 12px !important;
          }

          section:nth-of-type(6) {
            padding: 32px 4vw !important;
          }

          section:nth-of-type(6) > div:first-child {
            font-size: 20px !important;
            margin-bottom: 16px !important;
          }

          section:nth-of-type(6) ul {
            font-size: 14px !important;
            line-height: 1.8 !important;
            padding-left: 20px !important;
            max-width: 500px !important;
            list-style: none !important;
          }

          section:nth-of-type(6) ul li {
            margin-bottom: 16px !important;
            padding: 12px !important;
            background: rgba(255, 255, 255, 0.05) !important;
            border-radius: 8px !important;
          }

          footer {
            font-size: 14px !important;
            padding: 32px 4vw !important;
            line-height: 1.7 !important;
          }

          footer > div:first-child {
            margin-bottom: 20px !important;
          }

          footer > div:nth-child(2) {
            margin-top: 20px !important;
          }

          footer > div:last-child {
            margin-top: 20px !important;
            font-size: 13px !important;
          }

          /* 購買區手機版調整 */
          #pricing-section {
            padding: 60px 4vw !important;
          }

          #pricing-section h2 {
            font-size: 44px !important;
            margin-bottom: 16px !important;
          }

          #pricing-section p {
            font-size: 20px !important;
            margin-bottom: 40px !important;
          }

          .pricing-container {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 40px !important;
          }

          .benefits-section {
            max-width: 100% !important;
            margin-right: 0 !important;
            text-align: left !important;
            padding: 0 20px !important;
          }

          .benefits-section h3 {
            font-size: 32px !important;
            margin-bottom: 24px !important;
            text-align: center !important;
          }

          .benefits-section > div {
            gap: 4px !important;
          }

          .benefits-section > div > div {
            justify-content: flex-start !important;
            text-align: left !important;
            padding: 8px 0 !important;
            margin-bottom: 4px !important;
          }

          .benefits-section span {
            font-size: 22px !important;
          }

          .pricing-card {
            width: 400px !important;
            max-width: 92vw !important;
            padding: 40px 32px !important;
          }

          /* 官網限定優惠標籤字體 */
          .pricing-card > div:first-child {
            font-size: 18px !important;
            padding: 12px 32px !important;
          }

          .pricing-card h3 {
            font-size: 30px !important;
          }

          /* 手機版原價位置調整 */
          .pricing-card > div[style*="position: absolute"][style*="top: 8px"] {
            top: 4px !important;
            left: 8px !important;
          }

          .pricing-card > div[style*="position: absolute"] span[style*="fontSize: 12"] {
            font-size: 14px !important;
          }

          .pricing-card > div[style*="position: absolute"] span[style*="fontSize: 18"] {
            font-size: 20px !important;
          }









          


          .pricing-card span[style*="font-size: 14px"],
          .pricing-card span[style*="fontSize: 14"] {
            font-size: 18px !important;
          }

          .pricing-card span[style*="font-size: 24px"],
          .pricing-card span[style*="fontSize: 24"] {
            font-size: 30px !important;
          }

          .pricing-card span[style*="font-size: 18px"],
          .pricing-card span[style*="fontSize: 18"] {
            font-size: 24px !important;
          }

          .pricing-card span[style*="font-size: 16px"],
          .pricing-card span[style*="fontSize: 16"] {
            font-size: 20px !important;
          }

          .pricing-card button {
            font-size: 18px !important;
            padding: 18px 26px !important;
          }

          /* 手機版優惠價格字體 - 最高優先級，放在最後 */
          .pricing-card span[style*="fontSize: 48"] {
            font-size: 42px !important;
          }
          .pricing-card > div:nth-child(3) span[style*="fontWeight: 900"],
          .pricing-card > div:nth-child(4) span[style*="fontWeight: 900"] {
            font-size: 42px !important;
          }


          /* 浮動 Line 按鈕手機版調整 */
          a[href*="line.me"] {
            bottom: 16px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
            box-shadow: none !important;
          }

          a[href*="line.me"]:hover {
            box-shadow: none !important;
          }

          a[href*="line.me"] img {
            width: 56px !important;
            height: 56px !important;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
          }
        }

        /* 小型手機 (480px 以下) */
        @media (max-width: 480px) {

          .hero-content-area img {
            width: 100px !important;
            height: 100px !important;
            border-radius: 27px !important;
            margin-bottom: 16px !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
          }
          nav {
            padding: 10px 2vw !important;
          }

          nav span {
            font-size: 14px !important;
          }

          nav div:last-child {
            gap: 6px !important;
          }

          nav a {
            padding: 4px 12px !important;
            font-size: 11px !important;
          }

          .hero-section {
            padding: 1.5rem 2vw 0.5rem 2vw !important;
            gap: 1.5rem !important;
          }

          /* 小型手機版影片區塊和下載區並排 */
          .mobile-video-section {
            flex-direction: row !important;
            gap: 1rem !important;
            padding: 2rem 2vw !important;
          }

          .mobile-phone-container {
            width: 180px !important;
            height: 360px !important;
          }

          .mobile-iphone-frame {
            width: 140px !important;
            height: 280px !important;
            border-radius: 20px !important;
          }

          .mobile-phone-screen {
            border-radius: 16px !important;
          }

          .mobile-video-section video {
            border-radius: 16px !important;
          }

          .mobile-video-fallback {
            border-radius: 16px !important;
          }

          .mobile-dynamic-island {
            width: 40px !important;
            height: 12px !important;
            border-radius: 6px !important;
          }

          /* 小型手機版下載區調整 */
          .mobile-download-section {
            max-width: 200px !important;
            align-items: center !important;
            flex: 1 !important;
          }

          .mobile-download-title {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }

          .mobile-download-btn-row {
            flex-direction: column !important;
            gap: 26px !important;
          }

          .mobile-download-btn img {
            height: 42px !important;
          }

          .mobile-download-btn .overlay-text {
            font-size: 10px !important;
            padding: 2px 6px !important;
            background: rgb(255, 255, 255) !important;
            color: #0ea5e9 !important;
            border-radius: 12px !important;
          }

          .hero-content-area h1:first-of-type {
            font-size: 28px !important;
          }

          .hero-content-area h1:nth-of-type(2) {
            font-size: 26px !important;
          }

          .hero-subtitle {
            font-size: 18px !important;
          }

          .hero-content-area div:nth-of-type(4) {
            font-size: 14px !important;
            padding: 8px 20px !important;
          }

          .hero-content-area button {
            font-size: 18px !important;
            padding: 16px 32px !important;
            border-radius: 28px !important;
          }

          section:nth-of-type(4),
          section:nth-of-type(5),
          section:nth-of-type(6) {
            padding: 20px 2vw !important;
          }

          /* 購買區小型手機版調整 */
          #pricing-section h2 {
            font-size: 32px !important;
          }

          #pricing-section p {
            font-size: 18px !important;
          }

          .pricing-container {
            gap: 40px !important;
          }

          .benefits-section h3 {
            font-size: 26px !important;
            margin-bottom: 16px !important;
          }

          .benefits-section > div {
            gap: 2px !important;
          }

          .benefits-section > div > div {
            padding: 6px 0 !important;
            margin-bottom: 2px !important;
          }

          .benefits-section span {
            font-size: 20px !important;
          }

          .pricing-card {
            width: 340px !important;
            max-width: 92vw !important;
            padding: 28px 24px !important;
          }

          /* 小型手機版官網限定優惠標籤 */
          .pricing-card > div:first-child {
            font-size: 16px !important;
            padding: 10px 28px !important;
          }

          .pricing-card h3 {
            font-size: 28px !important;
          }

          /* 小型手機版按鈕字體調整 */
          .pricing-card button {
            font-size: 18px !important;
            padding: 16px 24px !important;
          }

          /* 小型手機版原價位置調整 */
          .pricing-card > div[style*="position: absolute"][style*="top: 8px"] {
            top: 2px !important;
            left: 6px !important;
          }

          .pricing-card > div[style*="position: absolute"] span[style*="fontSize: 12"] {
            font-size: 12px !important;
          }

          .pricing-card > div[style*="position: absolute"] span[style*="fontSize: 18"] {
            font-size: 16px !important;
          }




          



          /* 小型手機版通用字體調整（但不影響主要價格） */
          .pricing-card span[style*="font-size: 36px"]:not(.mobile-price-252):not(.mobile-price-2160),
          .pricing-card span[style*="fontSize: 36"]:not(.mobile-price-252):not(.mobile-price-2160) {
            font-size: 32px !important;
          }

          .pricing-card span[style*="font-size: 14px"],
          .pricing-card span[style*="fontSize: 14"] {
            font-size: 14px !important;
          }

          .pricing-card span[style*="font-size: 24px"],
          .pricing-card span[style*="fontSize: 24"] {
            font-size: 22px !important;
          }

          .pricing-card span[style*="font-size: 18px"],
          .pricing-card span[style*="fontSize: 18"] {
            font-size: 20px !important;
          }

          .pricing-card span[style*="font-size: 16px"],
          .pricing-card span[style*="fontSize: 16"] {
            font-size: 18px !important;
          }

          .download-btn-row {
            flex-direction: column !important;
            align-items: center !important;
          }

          /* 小型手機版優惠價格字體 - 最高優先級，放在最後 */
          .pricing-card span[style*="fontSize: 48"] {
            font-size: 38px !important;
          }
          .pricing-card > div:nth-child(3) span[style*="fontWeight: 900"],
          .pricing-card > div:nth-child(4) span[style*="fontWeight: 900"] {
            font-size: 38px !important;
          }

          .feature-item {
            margin-bottom: 32px !important;
          }

          /* 小型手機版浮動按鈕調整 */
          a[href*="line.me"] {
            bottom: 12px !important;
            right: 12px !important;
            width: 55px !important;
            height: 55px !important;
            box-shadow: none !important;
          }

          a[href*="line.me"]:hover {
            box-shadow: none !important;
          }

          a[href*="line.me"] img {
            width: 50px !important;
            height: 50px !important;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
          }
        }

        /* 超小螢幕 (360px 以下) */
        @media (max-width: 360px) {
          .hero-content-area img {
            width: 80px !important;
            height: 80px !important;
            border-radius: 24px !important;
            margin-bottom: 14px !important;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15) !important;
          }
          /* 超小螢幕採用垂直佈局 */
          .mobile-video-section {
            flex-direction: column !important;
            gap: 1rem !important;
            padding: 1.5rem 2vw !important;
          }

          .mobile-phone-container {
            width: 160px !important;
            height: 320px !important;
          }

          .mobile-iphone-frame {
            width: 120px !important;
            height: 240px !important;
            border-radius: 18px !important;
          }

          .mobile-phone-screen {
            border-radius: 14px !important;
          }

          .mobile-video-section video {
            border-radius: 14px !important;
          }

          .mobile-video-fallback {
            border-radius: 14px !important;
          }

          .mobile-dynamic-island {
            width: 35px !important;
            height: 10px !important;
          }

          /* 超小螢幕下載區調整 */
          .mobile-download-section {
            max-width: 100% !important;
          }

          .mobile-download-title {
            font-size: 14px !important;
            margin-bottom: 12px !important;
          }

          .mobile-download-btn-row {
            flex-direction: column !important;
            gap: 12px !important;
          }

          .mobile-download-btn img {
            height: 34px !important;
          }

          .mobile-download-btn .overlay-text {
            font-size: 9px !important;
            padding: 2px 6px !important;
            background: rgb(255, 255, 255) !important;
            color: #0ea5e9 !important;
            border-radius: 10px !important;
          }

          .hero-content-area h1:first-of-type {
            font-size: 22px !important;
          }

          .hero-content-area h1:nth-of-type(2) {
            font-size: 20px !important;
          }

          .hero-subtitle {
            font-size: 12px !important;
          }

          .hero-content-area button {
            font-size: 16px !important;
            padding: 14px 28px !important;
            border-radius: 26px !important;
          }
        }
      `}</style>
    </div>
  );
}
