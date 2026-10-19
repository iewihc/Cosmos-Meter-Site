import Link from "next/link";
import { KEYBOARD_ADDON_PATH, brand, nav } from "@/content/keyboard-addon";
import styles from "./KeyboardAddon.module.css";

export function KeyboardAddonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <Link href={KEYBOARD_ADDON_PATH} className={styles.brand}>
          <span className={styles.brandMark}>{brand.mark}</span>
          <span>{brand.name}</span>
        </Link>

        <nav className={styles.navLinks} aria-label="頁面導覽">
          {nav.map(({ label, href }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.navRight}>
          <Link href="/" className={styles.parentLink}>
            {brand.parentApp} ↗
          </Link>
          <a className={styles.headerCta} href="#addon">
            加價購詳情
          </a>
        </div>
      </div>
    </header>
  );
}
