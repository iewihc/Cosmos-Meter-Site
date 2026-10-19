import Link from "next/link";
import { brand, footer } from "@/content/keyboard-addon";
import { COMPANY_NAME, LINE_OFFICIAL_URL } from "@/content/site";
import styles from "./KeyboardAddon.module.css";

export function KeyboardAddonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionInner}>
        <div className={styles.footerMain}>
          <div>
            <p>
              {footer.titleLine1}
              <span>{footer.titleLine2}</span>
            </p>
            <div className={styles.footerFlow}>{footer.flowLine}</div>
          </div>
          <a
            className={styles.primaryButton}
            href={LINE_OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.cta.label}
          </a>
        </div>

        <div className={styles.footerMeta}>
          <div>
            © {footer.year} {COMPANY_NAME} · {brand.name} · {brand.tagline}
            <br />
            {footer.disclaimer}
          </div>
          <nav className={styles.footerLinks} aria-label="法律資訊">
            <Link href="/">{brand.parentApp}</Link>
            <Link href="/privacy">隱私權政策</Link>
            <Link href="/terms">使用者條款</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
