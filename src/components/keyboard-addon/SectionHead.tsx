import styles from "./KeyboardAddon.module.css";

interface SectionHeadProps {
  kicker: string;
  title: string;
  /** 第二行標題，會以主色顯示 */
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
}

/** 各區塊共用的標題列：小標 + 大標（+ 說明） */
export function SectionHead({
  kicker,
  title,
  titleAccent,
  description,
  align = "left",
}: SectionHeadProps) {
  const className =
    align === "center"
      ? `${styles.sectionHead} ${styles.sectionHeadCenter}`
      : styles.sectionHead;

  return (
    <div className={className}>
      <p className={styles.kicker}>{kicker}</p>
      <h2>
        {title}
        {titleAccent && <span>{titleAccent}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
