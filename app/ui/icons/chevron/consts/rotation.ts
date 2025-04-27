import type { CSSProperties } from "react";
import type { XDirection, YDirection } from "../types";

export const x_rotationMap: Record<XDirection, CSSProperties["transform"]> = {
  up: "rotate(180deg)",
  down: "rotate(0deg)",
} as const;

export const y_rotationMap: Record<YDirection, CSSProperties["transform"]> = {
  left: "rotate(90deg)",
  right: "rotate(-90deg)",
} as const;
