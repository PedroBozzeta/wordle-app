import { useEffect, useRef, useState } from "react";
import { ReducerAction } from "./useGameStateReducer";
import { useSelectRandomWord, WordResponse } from "./useSelectRandomWord";
import { DATA_FETCHED } from "../constants/GameConstants";

export default function useFetchWord(restart: boolean, dispatch: (action: ReducerAction) => void) {
  const [word, setWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)

  const abortControllerRef = useRef<AbortController | null>(null)
  
  useEffect(() => {
    if (restart) {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setLoading(true);

      const callFetchWordFunction = async () => {

        try {
          const response = await fetch("https://api.datamuse.com/words?sp=?????&max=1000&topics=pet,nouns", {
            headers: {
              "Content-Type": "application/json"
            },
            signal: abortControllerRef.current?.signal
          });
          if (response.ok) {
            dispatch({ type: DATA_FETCHED});
            const parsedResponse:WordResponse[] = await response.json();
            setWord(useSelectRandomWord(parsedResponse));
          } else {
            throw new Error(response.statusText)
          }
        } catch (error:any) {
          if (error.name == "AbortError") {
            console.error("Aborted Request")
          } else {
            return console.error(error)
          }
        }
        finally {
          setLoading(false)
        }
       ;}

      callFetchWordFunction();
    }
  }, [restart]);

  return { word,loading }

}