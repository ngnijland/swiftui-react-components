import classNames from "classnames";

import { getPaddingClasses, getPaddingStyles } from "../utils";

import styles from "./hstack.module.css";

import type { Padding, VerticalAlignment } from "../types";

interface HStackProps {
  alignment?: VerticalAlignment;
  children: React.ReactNode;
  padding?: Padding;
}

export function HStack({
  alignment = "center",
  children,
  padding,
}: HStackProps) {
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
