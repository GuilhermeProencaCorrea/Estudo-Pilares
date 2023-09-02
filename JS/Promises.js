//! Trabalhando com Promessas

const myPromise = new Promise((resolve, reject) =>{

    const nome = "Guilherme"

    if (nome == "Guilherme") {
        resolve("Usuário Guilherme Econtrado!")
    } else {
        reject("O usuário Guilherme não foi econtrado!")
    }

});

myPromise.then((data) => {
    console.log(data)
})

//! 