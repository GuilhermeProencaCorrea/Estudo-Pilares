const indoarabico = [1,2,3,4,5,6,7,8,9,0];
console.log("Trás todos os elementos da matriz (indoarabico): "+indoarabico);

console.log("-----------------------------------------------------------------");

indoarabico[0]=10;
let numero = indoarabico[0];
console.log(numero);

console.log("-----------------------------------------------------------------");
//Método new Array() para cria arrays. new Array() e um construtor de matrizs embutido no js
const motos = new Array ("XRE","Start","Bros");
console.log("Motos interessantes: "+motos);

//toString() converte array em string
console.log("Teste do toString(): "+motos.toString());

console.log("-----------------------------------------------------------------");

//Propriedades e métodos da matriz
console.log("Quantidade de elementos da matriz (indoarabico): "+indoarabico.length);
//length retorna o número de elementos da array

console.log("-----------------------------------------------------------------");

const multiplos = [];
let i = 0;
let tabuadado = 2;
while(i<=10){
    multiplos[i]=tabuadado*i;
    i++
}
console.log("Múltiplos da tabuada do "+tabuadado+" são: "+multiplos);

console.log("-----------------------------------------------------------------");

const family =["Mãe","Pai","Irmã","..."]
family.forEach(ff);
function ff(value){
    console.log("T"+value+"T")
}

console.log("-----------------------------------------------------------------");
const numeros = [1,2];
console.log("Matriz números: "+numeros)
//Adicionar elementos - push
numeros.push(3);
console.log("Matriz números com novo elemeto adicionado: "+numeros)
//usando o length
numeros[numeros.length]=4;
console.log("Matriz números com novo elemeto adicionado usando length: "+numeros)