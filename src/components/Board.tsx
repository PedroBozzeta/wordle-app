import { useEffect, useState } from "react";
import Box from "./Box";
import { getWord } from "../services/getWord";

interface BoxDataType {
  value: string;
  state: boolean;
  class: string;
}

const defaultBoxData: BoxDataType = {
  value: "",
  state: true,
  class: "incorrect",
};
const Board = () => {
  const [word, setWord] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<string>("");
  const [turn, setTurn] = useState<number>(0);
  const [boxData, setBoxData] = useState<BoxDataType[]>(
    Array.from({ length: 30 }, () => defaultBoxData)
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    // Current index of the key pressed
    const keyPosition = turn * 5 + currentWord.length;
    if (e.key && turn < 6) {
      if (e.key === "Backspace") {
        if (currentWord.length > 0) {
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
            state: true,
            class: "incorrect",
          };
          setBoxData(newBoxData);
          setCurrentWord(currentWord + e.key);
        }
      } else if (e.key === "Enter") {
        const newBoxData = [...boxData];
        if (currentWord.length === 5) {
          for (let i = 0; i < 5; i++) {
            if (newBoxData[turn*5+i].value === word[i]) {
              newBoxData[turn*5+i].class = "correct";
              console.log("es correcto");
            } else if (
              word.split("").some((letter) => letter === newBoxData[turn*5+i].value)
            ) {
              newBoxData[turn*5+i].class = "present";
              console.log("es presente");
            }
          }
          setBoxData(newBoxData);
          setCurrentWord("");
          setTurn(turn + 1);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const callFetchWordFunction = async () => {
        const fetchedWord = await getWord();
        console.log(fetchedWord[0])
      setWord(fetchedWord[0]);
    };
    callFetchWordFunction();
  }, []);
  if (word.length !== 5) {
    return <h2>Cargando....</h2>;
  }
    return (
      <><h4>{word.toUpperCase()}</h4>
    <div className="board">
      {boxData.map((item, index) => (
        <Box value={item.value} class={item.class} key={index} />
      ))}
    </div></>
  );
};

export default Board;
