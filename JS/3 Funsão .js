/*

Quatro tipos básicos:
Função com parametro e com retorno (return)
Função com  parametro e sem retorno
Função sem  parametro e com retorno
Função sem  parametro e sem retorno

Função arrow / Arrow function

*/
 
let x = 5;

//Função void e com parâmetro

function myfunction (p1){

    //Gera uma tabuda do CINCO, que trás somente os múltiplos pares.
    let i = 0;
    while(i<=10){

    if (p1*i % 2 == 0) {
        console.log(`${p1} x ${i} = ${p1*i}`);
    };

    i++
    };
};
console.log(myfunction(x));

//Função return e com parâmetro
function myfunction2 (p1,p2){
    let somaDosNumeros = p1 + p2;
    return somaDosNumeros; //Retorna o valor da variavel somaDosNumeros para variavel valores.

};
var valores = myfunction2(9,9);
console.log(valores);

//Função arrow 1 return e com parâmetro
const multiplicacao = (p1,p2) =>{
    const produto = p1*p2;
    return produto;
};
//Função arrow 2 return e com parâmetro
var divisao = (p1,p2) => p1/p2; //Entende como return

const numero = multiplicacao(3,9); //Entrega os parametros e recebe o resultado.
const numero2 = divisao(6,6); //Entrega os parametros e recebe o resultado.

console.log("Função arrow 1: "+numero);
console.log("Função arrow 2: "+numero2);