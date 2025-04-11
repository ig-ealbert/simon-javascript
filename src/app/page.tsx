'use client'

import Board from "@/components/board";
import { LIGHT_DELAY, LIGHT_OFF_DELTA } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [sequence, setSequence] = useState<number[]>([]);
  const [turnNumber, setTurnNumber] = useState<number>(0);
  const [litSpace, setLitSpace] = useState<number>(-1);
  const [guessIndex, setGuessIndex] = useState<number>(0);
  const [isGuessActive, setIsGuessActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Click Start to begin");

  async function getSequence() {
    const response = await fetch('/api/sequence');
    const answer = await response.json();
    setSequence(answer);
    return answer;
  }

  async function start() {
    const seq = await getSequence();
    setTurnNumber(1);
    setMessage("");
    playSequence(seq, 1);
  }

  async function playSequence(sequence: number[], turn: number) {
    for (let i = 0; i < turn; i++) {
      setTimeout(() => {
        setLitSpace(sequence[i]);
      }, LIGHT_DELAY * (i + 1));
      setTimeout(() => {
        setLitSpace(-1);
      }, LIGHT_DELAY * (i + 1) - LIGHT_OFF_DELTA);
    }
    setTimeout(() => {
      setLitSpace(-1);
      setIsGuessActive(true);
    }, LIGHT_DELAY * (turn + 1));
    setGuessIndex(0);
  }

  function submitGuess(num: number) {
    if (!isGuessActive) {
      setMessage("Wait for the sequence to finish playing before guessing.");
      return;
    }

    if (num === sequence[guessIndex]) {
      setMessage("Correct guess - keep going!");
      setGuessIndex(guessIndex + 1);
    }
    else {
      setMessage("Wrong color - you lose.  Click Start to play again.");
      setIsGuessActive(false);
      return;
    }

    if (guessIndex + 1 >= sequence.length) {
      setMessage("Great job - you win!  Click Start to play again.");
      setIsGuessActive(false);
    }
    else if (guessIndex === turnNumber - 1) {
      setMessage("Active sequence completed.  Adding one move.");
      setIsGuessActive(false);
      setTurnNumber(turnNumber + 1);
      setTimeout(() => playSequence(sequence, turnNumber + 1), LIGHT_DELAY);
    }
  }

  return (
    <>
      <Board litSpace={litSpace} guess={submitGuess}></Board>
      <div>
        <button onClick={start}>Start</button>
      </div>
      <div className="message">{message}</div>
    </>
  );
}
