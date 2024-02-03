import type { Padding, RemValue } from "./types";

import styles from "./padding.module.css";

export function getPaddingClasses(padding: Padding): string[] {
  if (typeof padding === "number") {
    return [];
  }

  if (typeof padding === "boolean") {
    return [styles.padding];
  }

  if (typeof padding.length === "number") {
    return [];
  }

  switch (padding.edges) {
    case "top": {
      return [styles.paddingTop];
    }
    case "trailing":
    case "right": {
      return [styles.paddingRight];
    }
    case "bottom": {
      return [styles.paddingBottom];
    }
    case "leading":
    case "left": {
      return [styles.paddingLeft];
    }
    case "all": {
      return [styles.padding];
    }
    case "horizontal": {
      return [styles.paddingLeft, styles.paddingRight];
    }
    case "vertical": {
      return [styles.paddingTop, styles.paddingBottom];
    }
    default: {
      throw new Error(
        `Unkown value "${padding.edges}" for property "padding.edges"`
      );
    }
  }
}

type PaddingStyles =
  | {
      padding?: RemValue;
    }
  | {
      paddingTop?: RemValue;
      paddingRight?: RemValue;
      paddingBottom?: RemValue;
      paddingLeft?: RemValue;
    };

export function getPaddingStyles(padding: Padding): PaddingStyles {
  if (typeof padding === "boolean") {
    return {};
  }

  if (typeof padding === "number") {
    return { padding: converPixelsToRem(padding) };
  }

  if (typeof padding.length === "undefined") {
    return {};
  }

  const value = converPixelsToRem(padding.length);

  switch (padding.edges) {
    case "top": {
      return {
        paddingTop: value,
      };
    }
    case "trailing":
    case "right": {
      return { paddingRight: value };
    }
    case "bottom": {
      return { paddingBottom: value };
    }
    case "leading":
    case "left": {
      return { paddingLeft: value };
    }
    case "all": {
      return { padding: value };
    }
    case "horizontal": {
      return { paddingLeft: value, paddingRight: value };
    }
    case "vertical": {
      return { paddingTop: value, paddingBottom: value };
    }
    default: {
      throw new Error(
        `Unkown value "${padding.edges}" for property "padding.edges"`
      );
    }
  }
}

export function converPixelsToRem(pixels: number): RemValue {
  return `${pixels / 16}rem`;
}
