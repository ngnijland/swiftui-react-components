import classNames from "classnames";

import styles from "./text.module.css";
import fontStyles from "../font.module.css";

import type { Font } from "../types";

interface TextProps {
  children: string;
  font?: Font;
}

export function Text({ children, font = "body" }: TextProps) {
  return (
    <p className={classNames(styles.root, fontStyles[font])}>{children}</p>
  );
}
