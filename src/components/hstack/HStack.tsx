import classNames from "classnames";

import type { VerticalAlignment } from "../types";

import styles from "./hstack.module.css";

interface HStackProps {
  alignment?: VerticalAlignment;
  children: React.ReactNode;
}

export function HStack({ alignment = "center", children }: HStackProps) {
  return (
    <div className={classNames(styles.root, styles[alignment])}>{children}</div>
  );
}
