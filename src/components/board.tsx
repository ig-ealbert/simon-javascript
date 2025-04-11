import { boardProps } from "@/types/boardProps";
import Circle from "./circle";

export default function Board(props: boardProps) {
  return (
    <div>
      <svg className="board">
        <Circle x={50} color={"blue"} litColor={"aqua"}
          isLit={props.litSpace === 0} submitGuess={props.guess} />
        <Circle x={150} color={"maroon"} litColor={"red"}
          isLit={props.litSpace === 1} submitGuess={props.guess} />
        <Circle x={250} color={"green"} litColor={"lime"}
          isLit={props.litSpace === 2} submitGuess={props.guess} />
        <Circle x={350} color={"goldenrod"} litColor={"yellow"}
          isLit={props.litSpace === 3} submitGuess={props.guess} />
      </svg>
    </div>
  );
}
