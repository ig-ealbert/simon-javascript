import { boardProps } from "@/types/boardProps";
import Circle from "./circle";

export default function Board(props: boardProps) {
  return (
    <div>
      <svg className="board">
        <Circle x={50} color={"blue"} litColor={"white"}
          isLit={props.litSpace === 0} submitGuess={props.guess} />
        <Circle x={150} color={"red"} litColor={"white"}
          isLit={props.litSpace === 1} submitGuess={props.guess} />
        <Circle x={250} color={"green"} litColor={"white"}
          isLit={props.litSpace === 2} submitGuess={props.guess} />
        <Circle x={350} color={"yellow"} litColor={"purple"}
          isLit={props.litSpace === 3} submitGuess={props.guess} />
      </svg>
    </div>
  );
}
