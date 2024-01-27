import classNames from "classnames";

import { HorizontalAlignment } from "../types";

import styles from "./vstack.module.css";

interface VStackProps {
  alignment?: HorizontalAlignment;
  children: React.ReactNode;
}

export function VStack({ alignment = "center", children }: VStackProps) {
  return (
    <div className={classNames(styles.root, styles[alignment])}>{children}</div>
  );
}
