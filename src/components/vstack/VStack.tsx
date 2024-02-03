import classNames from "classnames";

import { getPaddingClasses, getPaddingStyles } from "../utils";

import styles from "./vstack.module.css";

import type { HorizontalAlignment, Padding } from "../types";

interface VStackProps {
  alignment?: HorizontalAlignment;
  children: React.ReactNode;
  padding?: Padding;
}

export function VStack({
  alignment = "center",
  children,
  padding,
}: VStackProps) {
  return (
    <div
      className={classNames(
        styles.root,
        styles[alignment],
        ...(padding ? getPaddingClasses(padding) : [])
      )}
      style={{
        ...(padding ? getPaddingStyles(padding) : {}),
      }}
    >
      {children}
    </div>
  );
}
