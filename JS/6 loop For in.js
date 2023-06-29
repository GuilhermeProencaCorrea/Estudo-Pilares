const pessoa = {nome:"Carlos", idade: 30, nacionalidade: "Americano",}
const matriz = [100,33,45,59,01];

console.log("Inicio do programa");
console.log("For in percorrendo propriedades de um objeto:")
for(let x in pessoa){
    console.log(x +": "+ pessoa[x]);
    
}
console.log("For in percorrendo elementos de array:");
for(let y in matriz){
    console.log("Posição: "+y+"º "+matriz[y]+" elemento.");

}
for(let y2 in matriz){
    console.log(y2);
}
console.log("Fim do programa");