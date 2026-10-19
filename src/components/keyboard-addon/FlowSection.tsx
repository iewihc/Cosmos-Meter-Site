import type { CSSProperties } from "react";
import { flow } from "@/content/keyboard-addon";
import { SectionHead } from "./SectionHead";
import styles from "./KeyboardAddon.module.css";

interface FlowStepsProps {
  steps: string[];
  variant: "before" | "after";
}

/** 以箭頭串接的步驟列，進場動畫延遲由 CSS 變數 --i 決定 */
function FlowSteps({ steps, variant }: FlowStepsProps) {
  const variantClass = variant === "before" ? styles.beforeFlow : styles.afterFlow;

  return (
    <div className={`${styles.chipList} ${variantClass}`}>
      {steps.map((step, index) => (
        <span
          className={styles.flowItem}
          style={{ "--i": index } as CSSProperties}
          key={step}
        >
          <span className={styles.flowStepLabel}>{step}</span>
          {index < steps.length - 1 && (
            <span className={styles.flowArrow} aria-hidden>
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function FlowSection() {
  return (
    <section id="flow" className={styles.flowSection}>
      <div className={styles.sectionInner}>
        <SectionHead kicker={flow.kicker} title={flow.title} />

        <div className={styles.flowGrid}>
          <article className={styles.flowPanel}>
            <p className={styles.panelLabel}>{flow.before.label}</p>
            <FlowSteps steps={flow.before.steps} variant="before" />
            <p>{flow.before.note}</p>
          </article>

          <article className={`${styles.flowPanel} ${styles.highlightPanel}`}>
            <p className={styles.panelLabel}>{flow.after.label}</p>
            <FlowSteps steps={flow.after.steps} variant="after" />
            <p>{flow.after.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
