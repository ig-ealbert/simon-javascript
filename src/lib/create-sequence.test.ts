import { describe, it } from "@jest/globals"
import assert from "node:assert";
import { createSequence } from "./create-sequence";
import { SEQUENCE_LENGTH } from "@/constants";
   
 describe("Create sequence", () => {
  it('Creates a sequence of 8 colors represented as numbers', () => {
    const seq = createSequence();
    assert.strictEqual(seq.length, SEQUENCE_LENGTH);
    assert.strictEqual(seq.filter((num) => num < 4).length, SEQUENCE_LENGTH);
  });
 });