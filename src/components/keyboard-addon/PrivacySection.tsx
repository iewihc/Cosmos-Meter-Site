import { privacy } from "@/content/keyboard-addon";
import { SectionHead } from "./SectionHead";
import styles from "./KeyboardAddon.module.css";

export function PrivacySection() {
  return (
    <section id="privacy" className={styles.privacySection}>
      <div className={styles.sectionInner}>
        <SectionHead
          kicker={privacy.kicker}
          title={privacy.title}
          description={privacy.body}
        />
      </div>
    </section>
  );
}
