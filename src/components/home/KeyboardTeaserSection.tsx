import Link from "next/link";
import { PhoneMock } from "@/components/keyboard-addon/PhoneMock";
import keyboardStyles from "@/components/keyboard-addon/KeyboardAddon.module.css";
import { homeTeaser, phoneMock } from "@/content/keyboard-addon";
import { LINE_OFFICIAL_URL } from "@/content/site";
import styles from "./KeyboardTeaser.module.css";

/** 藍錶首頁：報分鍵盤加價購導流區（不顯示定價） */
export function KeyboardTeaserSection() {
  return (
    <section id="keyboard-teaser" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <p className={styles.badge}>{homeTeaser.badge}</p>
          <h2 className={styles.title}>
            {homeTeaser.titleLine1}
            <span>{homeTeaser.titleLine2}</span>
          </h2>
          <p className={styles.body}>{homeTeaser.body}</p>
          <div className={styles.chips}>
            {homeTeaser.chips.map((chip) => (
              <span className={styles.chip} key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <Link className={styles.primary} href={homeTeaser.primaryCta.href}>
              {homeTeaser.primaryCta.label}
            </Link>
            <a
              className={styles.secondary}
              href={LINE_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeTeaser.secondaryCta.label}
            </a>
          </div>
          <p className={styles.note}>{homeTeaser.note}</p>
        </div>

        <div className={`${keyboardStyles.theme} ${styles.phone}`}>
          <PhoneMock content={phoneMock} />
        </div>
      </div>
    </section>
  );
}
