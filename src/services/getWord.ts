export  const getWord =async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://clientes.api.greenborn.com.ar/public-random-word?l=5", {
        headers: {
            "Content-Type":"application/json"
        },
    })
        .then(res =>{
        if (res.ok) {
            return res.json();
        }}
    ).catch(err => console.error(err))
    console.log(response)
    return response;

}