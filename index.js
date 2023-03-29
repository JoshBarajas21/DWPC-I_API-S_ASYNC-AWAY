function getRequest(requ){
    return new Promise ( (resolver, rejectar) => {
        fetch(requ)
        /* .then((response) => console.log(response)) */
        .then(res =>{ 
            resolver(res);
            console.log(res)})
            
        /* .then(response => {
            console.log(response)
            resolver(response)
        }) */
        .catch((err) => {
            rejectar(console.log('No se puede'))
        })
    })
}

async function getRandomCat(){
    document.getElementById('descripcion').textContent = "Esperando Gatitos 😺😸😻";
    try {
        await getRequest('https://cataas.com/cat')
        .then(data => {
            if(data.status===200){
                console.log('Iniciando Petición')
                console.log(data.url)
                console.log('😸Espera un poco más😸')
                const randomCat = document.getElementById("Catimage")
                randomCat.src = data.url;
                document.getElementById('descripcion').textContent = "Gatito ha llegado 😺😸😻";
            } else{
                console.log('No se pudo')
            }
        })
    } catch(error) { 
            console.log({message: error})
            document.getElementById('descripcion').textContent = "Ups... No hay gatitos 😿😿😿";
        }   
}