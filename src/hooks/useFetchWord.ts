import { useEffect,  useState } from "react";
import { ReducerAction } from "./useGameStateReducer";

export default function useFetchWord(restart:boolean,dispatch:(action: ReducerAction)=>void) {
  const [word, setWord] = useState<string>("");
  
    useEffect(() => {
        if (restart) {
          const callFetchWordFunction = async () => {
            const randomWordIndex= Math.floor(Math.random()*1000)
            const response = await fetch("https://api.datamuse.com/words?sp=?????&max=1000", {
                headers: {
                    "Content-Type":"application/json"
                },
            })
                .then(res =>{
                  if (res.ok) {
                    dispatch({type:"DATA_FETCHED"});
                  return res.json();
                  
                }}
            ).catch(err => console.error(err))
            
            const fetchedWord=response[randomWordIndex].word;
            // Making sure that theres no blank space in the fetched word
            if (fetchedWord.split("").some((letter: string) => letter.toLowerCase() == " ")) {
              setWord("react");
            } else {
              setWord(fetchedWord);
            }
          };
    
          callFetchWordFunction();
        }
    }, [restart]);

    return {word,setWord}
    
}