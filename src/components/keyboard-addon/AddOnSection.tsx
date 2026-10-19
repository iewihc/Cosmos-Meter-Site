import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { addOn } from "@/content/keyboard-addon";
import { LINE_OFFICIAL_URL } from "@/content/site";
import { SectionHead } from "./SectionHead";
import styles from "./KeyboardAddon.module.css";

/** 加價購說明區：取代原本的訂閱方案，刻意不顯示定價 */
export function AddOnSection() {
  return (
    <section id="addon" className={styles.addOnSection}>
      <div className={styles.sectionInner}>
        <div className={styles.addOnGrid}>
          <div>
            <SectionHead
              kicker={addOn.kicker}
              title={addOn.title}
              description={addOn.body}
            />
            <p className={styles.addOnBadge}>
              <span className={styles.signalDot} />
              {addOn.badge}
            </p>
          </div>

          <article className={styles.addOnCard}>
            <h3>{addOn.cardTitle}</h3>
            <ul>
              {addOn.includes.map((item) => (
                <li key={item}>
                  <FaCheck aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.addOnActions}>
              <a
                className={styles.primaryButton}
                href={LINE_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {addOn.primaryCta.label}
              </a>
              <Link className={styles.secondaryButton} href={addOn.secondaryCta.href}>
                {addOn.secondaryCta.label}
              </Link>
            </div>
            <p className={styles.addOnNote}>{addOn.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
