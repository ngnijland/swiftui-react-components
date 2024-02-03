import classNames from "classnames";

import styles from "./text.module.css";
import fontStyles from "../font.module.css";

import type { Color, Font } from "../types";

interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: string;
  font?: Font;
  foregroundColor?: Color;
}

export function Text({
  as = "p",
  children,
  foregroundColor = "primary",
  font = "body",
}: TextProps) {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        styles.root,
        fontStyles[font],
        styles[foregroundColor]
      )}
    >
      {children}
    </Tag>
  );
}
