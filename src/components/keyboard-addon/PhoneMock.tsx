import { FaLocationArrow } from "react-icons/fa";
import type { PhoneMockContent } from "@/content/keyboard-addon";
import styles from "./KeyboardAddon.module.css";

interface PhoneMockProps {
  content: PhoneMockContent;
}

/**
 * 以純 CSS 繪製的 iPhone 鍵盤操作示意圖。
 * 外層需套用 `styles.theme` 以取得色彩變數（頁面根節點或首頁導流區）。
 */
export function PhoneMock({ content }: PhoneMockProps) {
  return (
    <div className={styles.phoneWrap} aria-label="報分鍵盤鍵盤操作預覽">
      <div className={styles.phoneFrame}>
        <div className={styles.phoneScreen}>
          <div className={styles.statusBar}>
            <span>{content.time}</span>
            <span className={styles.dynamicIsland} />
            <span>{content.battery}</span>
          </div>

          <div className={styles.chatArea}>
            <div className={styles.chatBubbleIncoming}>
              {content.incomingMessage}
            </div>
            <div className={styles.chatBubbleOutgoing}>
              {content.outgoingMessage}
            </div>
          </div>

          <div className={styles.keyboardArea}>
            <div className={styles.detectCard}>
              <div className={styles.detectLabel}>
                <span className={styles.signalDot} />
                {content.detectedLabel}
              </div>
              <p>{content.detectedAddress}</p>
              <div className={styles.detectMeta}>
                <span>{content.eta}</span>
                <div className={styles.detectActions}>
                  <button
                    className={styles.navIconButton}
                    type="button"
                    aria-label={content.navLabel}
                  >
                    <FaLocationArrow aria-hidden="true" />
                  </button>
                  <button className={styles.sendButton} type="button">
                    {content.sendLabel}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.quickGrid}>
              {content.quickKeys.map((key) => (
                <button className={styles.keycap} type="button" key={key}>
                  {key}
                </button>
              ))}
            </div>
            <div className={styles.minuteGrid}>
              {content.minuteKeys.map((key) => (
                <button className={styles.keycap} type="button" key={key}>
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
