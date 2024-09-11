import { useEffect, useState } from "react";
import Box from "./Box";
import { getWord } from "../services/getWord";

interface BoxDataType {
  value: string;
  class: string;
}

const defaultBoxData: BoxDataType = {
  value: "",
  class: "incorrect",
};
const Board = () => {
  const [word, setWord] = useState<string>("");
  const [state, setState] = useState<string>("playing");
  const [win, setWin] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(true);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [turn, setTurn] = useState<number>(0);
  const [boxData, setBoxData] = useState<BoxDataType[]>(
    Array.from({ length: 30 }, () => defaultBoxData)
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    // Current index of the key pressed
    const keyPosition = turn * 5 + currentWord.length;

    if (e.key && turn < 6 && state == "playing") {
      if (e.key === "Backspace") {
        if (currentWord.length > 0) {
          //  Eliminating the last input
          const newBoxData = [...boxData];
          newBoxData.splice(keyPosition - 1, 1, defaultBoxData);
          setBoxData(newBoxData);
          setCurrentWord(currentWord.slice(0, currentWord.length - 1));
        }
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        if (currentWord.length < 5) {
          const newBoxData = [...boxData];
          newBoxData[keyPosition] = {
            value: e.key,
            class: "incorrect",
          };
          setBoxData(newBoxData);
          setCurrentWord(currentWord + e.key);
        }
      } else if (e.key === "Enter") {
        const newBoxData = [...boxData];
        if (currentWord.length === 5) {
          for (let i = 0; i < 5; i++) {
            // Analize if any of the letter in the current answer is on the right position or at least exist in the word
            if (
              newBoxData[turn * 5 + i].value.toLowerCase() ===
              word[i].toLowerCase()
            ) {
              newBoxData[turn * 5 + i].class = "correct";
            } else if (
              word
                .split("")
                .some(
                  (letter) =>
                    letter.toLowerCase() ===
                    newBoxData[turn * 5 + i].value.toLowerCase()
                )
            ) {
              newBoxData[turn * 5 + i].class = "present";
            }
            if (currentWord.toLowerCase() === word.toLowerCase()) {
              setState("finished");
              setWin(true);
            }
          }
          setBoxData(newBoxData);
          setCurrentWord("");
          setTurn(turn + 1);
        }
      }
    }
    if (e.key === "Enter" && state == "finished") {
      // Cleaning all states and restarting the game
      setRestart(true);
      setState("playing");
      setTurn(0);
      setCurrentWord("");
      setWin(false);
      setBoxData(Array.from({ length: 30 }, () => defaultBoxData));
    }
  };
  useEffect(() => {
    // Making sure that the game finishes when we reach the sixth turn
    if (turn >= 6) {
      setState("finished");
    }
  }, [turn]);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    console.log(restart);
    if (restart) {
      const callFetchWordFunction = async () => {
        const fetchedWord = await getWord();
        console.log(fetchedWord);
        // Making sure that theres no blank space in the fetched word
        if (fetchedWord.split("").some((letter: string) => letter.toLowerCase() == " ")) {
          setWord("react");
        } else {
          setWord(fetchedWord);
        }
        setRestart(false);
      };

      callFetchWordFunction();
    }
  }, [restart]);
  if (word.length !== 5) {
    return <h2>Cargando....</h2>;
  }
  return (
    <>
      {state == "playing" && <h4 className="montserrat-font description">Find the word</h4>}
      {state == "finished" && (
        <h4 className={`montserrat-font ${win && "win"}`}>
          {win ? "Correct!" : "The word was:"}
        </h4>
      )}
      {state == "finished" && (
        <h4 className="montserrat-font">{word.toUpperCase()}</h4>
      )}
      <div className="board">
        {boxData.map((item, index) => (
          <Box value={item.value} class={item.class} key={index} />
        ))}
      </div>
      {state == "finished" && (
        <h4 className="montserrat-font heartbeat">{`PRESS [Enter] TO RESTART`}</h4>
      )}
    </>
  );
};

export default Board;
