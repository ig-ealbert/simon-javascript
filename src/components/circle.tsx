'use client'

import { circleProps } from "@/types/circleProps";
import { CIRCLE_BORDER, CIRCLE_RADIUS, CIRCLE_Y } from "@/constants";

export default function Circle(props: circleProps) {
  const colorToIndex: Record<string, number> = {
    "blue": 0,
    "red": 1,
    "green": 2,
    "yellow": 3,
  };

  function determineColor() {
    if (props.isLit) {
      return props.litColor;
    }
    return props.color;
  }

  return (
    <circle cx={props.x} cy={CIRCLE_Y} r={CIRCLE_RADIUS}
            fill={props.color} stroke={determineColor()} strokeWidth={CIRCLE_BORDER}
            onClick={() => props.submitGuess(colorToIndex[props.color])}>
    </circle>
  );
}
