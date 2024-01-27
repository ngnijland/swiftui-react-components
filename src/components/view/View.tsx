import styles from "./view.module.css";

interface ViewProps {
  children?: React.ReactNode;
}

export function View({ children }: ViewProps) {
  return <div className={styles.root}>{children}</div>;
}
