import { faq, faqSection } from "@/content/keyboard-addon";
import { SectionHead } from "./SectionHead";
import styles from "./KeyboardAddon.module.css";

export function FaqSection() {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.faqInner}>
        <SectionHead kicker={faqSection.kicker} title={faqSection.title} />
        <dl>
          {faq.map(({ question, answer }) => (
            <div key={question}>
              <dt>{question}</dt>
              <dd>{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
