import { hero, phoneMock } from "@/content/keyboard-addon";
import { PhoneMock } from "./PhoneMock";
import styles from "./KeyboardAddon.module.css";

export function HeroSection() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.gridSoft} aria-hidden />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.signalDot} />
            {hero.eyebrow}
          </p>
          <h1>
            {hero.titleLine1}
            <span>{hero.titleLine2}</span>
          </h1>
          <p className={styles.heroText}>{hero.body}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className={styles.secondaryButton} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className={styles.trustLine}>{hero.trustLine}</p>
        </div>

        <PhoneMock content={phoneMock} />
      </div>
    </section>
  );
}
