export type HorizontalAlignment = "leading" | "center" | "trailing";

export type VerticalAlignment = "top" | "center" | "bottom";

export type Edge =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "all"
  | "leading"
  | "trailing"
  | "horizontal"
  | "vertical";

export type Padding =
  | number
  | true
  | {
      edges: Edge;
      length?: number;
    };

export type RemValue = `${number}rem`;
