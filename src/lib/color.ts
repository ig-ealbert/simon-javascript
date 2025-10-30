import { circleProps } from "@/types/circleProps";

export const colorToIndex: Record<string, number> = {
  blue: 0,
  maroon: 1,
  green: 2,
  goldenrod: 3,
};

export function determineColor(props: circleProps) {
  if (props.isLit) {
    return props.litColor;
  }
  return props.color;
}
