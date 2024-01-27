import styles from "./text.module.css";

interface TextProps {
  children: string;
}

export function Text({ children }: TextProps) {
  return <p className={styles.root}>{children}</p>;
}
