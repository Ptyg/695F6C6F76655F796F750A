import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { x_rotationMap, y_rotationMap } from "./consts/rotation";
import type { ChevronIconProps } from "./types";

const ChevronIcon: React.FC<ChevronIconProps> = (props) => {
  if (props.axis === "x") {
    return (
      <IoChevronDownOutline
        onClick={props.onClick}
        className={props.className}
        style={{
          transition: "transform 200ms ease",
          transform: x_rotationMap[props.direction],
        }}
      />
    );
  }

  return (
    <IoChevronDownOutline
      onClick={props.onClick}
      className={props.className}
      style={{
        transition: "transform 200ms ease",
        transform: y_rotationMap[props.direction],
      }}
    />
  );
};

export default ChevronIcon;
