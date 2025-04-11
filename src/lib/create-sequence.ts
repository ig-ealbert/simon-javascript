import { SEQUENCE_LENGTH } from "@/constants";

export function createSequence() {
  const sequence = [];
  for (let i = 0; i < SEQUENCE_LENGTH; i++) {
    const randomNumber = Math.floor(Math.random() * 4);
    sequence.push(randomNumber);
  }
  return sequence;
}
