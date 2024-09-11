export const getWord = async () => {
    const randomWordIndex= Math.floor(Math.random()*1000)
    const response = await fetch("https://api.datamuse.com/words?sp=?????&max=1000", {
        headers: {
            "Content-Type":"application/json"
        },
    })
        .then(res =>{
        if (res.ok) {
            return res.json();
        }}
    ).catch(err => console.error(err))
    
    return response[randomWordIndex].word;

}