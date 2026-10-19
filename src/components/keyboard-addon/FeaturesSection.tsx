import type { IconType } from "react-icons";
import {
  FaClock,
  FaCompass,
  FaKeyboard,
  FaMagic,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { features, featuresSection, type FeatureIconKey } from "@/content/keyboard-addon";
import { SectionHead } from "./SectionHead";
import styles from "./KeyboardAddon.module.css";

const FEATURE_ICONS: Record<FeatureIconKey, IconType> = {
  magic: FaMagic,
  clock: FaClock,
  map: FaMapMarkerAlt,
  keyboard: FaKeyboard,
  compass: FaCompass,
  shield: FaShieldAlt,
};

export function FeaturesSection() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.sectionInner}>
        <SectionHead
          kicker={featuresSection.kicker}
          title={featuresSection.titleLine1}
          titleAccent={featuresSection.titleLine2}
        />

        <div className={styles.featureGrid}>
          {features.map(({ icon, title, body }) => {
            const Icon = FEATURE_ICONS[icon];
            return (
              <article className={styles.featureCard} key={title}>
                <span className={styles.iconBox}>
                  <Icon aria-hidden />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
