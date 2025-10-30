"use client";

import { circleProps } from "@/types/circleProps";
import { CIRCLE_BORDER, CIRCLE_RADIUS, CIRCLE_Y } from "@/constants";
import { colorToIndex, determineColor } from "@/lib/color";

export default function Circle(props: circleProps) {
  return (
    <circle
      cx={props.x}
      cy={CIRCLE_Y}
      r={CIRCLE_RADIUS}
      fill={determineColor(props)}
      stroke={props.color}
      strokeWidth={CIRCLE_BORDER}
      onClick={() => props.submitGuess(colorToIndex[props.color])}
    ></circle>
  );
}
