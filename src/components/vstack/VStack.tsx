import classNames from "classnames";

import type { HorizontalAlignment } from "../types";

import styles from "./vstack.module.css";
import commonStyles from "../styles.module.css";

interface VStackProps {
  alignment?: HorizontalAlignment;
  children: React.ReactNode;
  padding: number | true;
}

export function VStack({
  alignment = "center",
  children,
  padding,
}: VStackProps) {
  return (
    <div
      className={classNames(styles.root, styles[alignment], {
        [commonStyles.padding]: typeof padding === "boolean",
      })}
      style={{ ...(typeof padding === "number" ? { padding } : {}) }}
    >
      {children}
    </div>
  );
}
