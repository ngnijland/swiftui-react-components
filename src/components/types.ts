export type HorizontalAlignment = "leading" | "center" | "trailing";

export type VerticalAlignment = "top" | "center" | "bottom";

export type RemValue = `${number}rem`;

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

export type Font =
  | "largeTitle"
  | "title"
  | "title2"
  | "title3"
  | "headline"
  | "body"
  | "callout"
  | "subhead"
  | "footnote"
  | "caption1"
  | "caption2";
