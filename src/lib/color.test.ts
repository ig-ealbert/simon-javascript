import { describe, it } from "@jest/globals";
import assert from "node:assert";
import { createSequence } from "./create-sequence";
import { SEQUENCE_LENGTH } from "@/constants";
import { determineColor } from "./color";

describe("Color helpers", () => {
  it("Determines lit color", () => {
    const props = {
      x: 0,
      color: "blue",
      litColor: "lightblue",
      isLit: true,
      submitGuess: () => null,
    };
    const color = determineColor(props);
    assert.strictEqual(color, "lightblue");
  });

  it("Determines unlit color", () => {
    const props = {
      x: 0,
      color: "blue",
      litColor: "lightblue",
      isLit: false,
      submitGuess: () => null,
    };
    const color = determineColor(props);
    assert.strictEqual(color, "blue");
  });
});
