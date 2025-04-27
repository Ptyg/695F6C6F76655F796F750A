export type ChevronIconProps = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string
} & (
  | { axis: "x"; direction: "up" | "down" }
  | { axis: "y"; direction: "left" | "right" }
);

export type XDirection = "up" | "down";
export type YDirection = "left" | "right";
