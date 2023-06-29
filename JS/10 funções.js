/*
Função void (vazia)
Função com parâmetros
Função return
Função arrow / arrow function
*/
 
let x = 9, y = 3;
//Função void e com parâmetro

function myfunction (p1,p2){
    
    //gera uma tabuda de um número x
    let i = 0;
    while(i<=10){
    console.log(i+" * "+p1+" = "+p1*i);
    i++
    }  
}
console.log(myfunction(x,y));

//Função return
function myfunction2 (p1,p2){
    let soma_dos_números = p1 + p2;
    return soma_dos_números; //retorna a soma para a varável valores

};
var valores = myfunction2(9,9);
console.log(valores);

//Função arrow
const numero = (p1,p2) =>{
    const numero = p1*p2;
    return numero;
}
var numero_2 = (p1,p2) => p1+p2 //entende como return
const recebe = numero(3,9);
const recebe_2 = numero_2(6,6);

console.log("Função arrow "+recebe);
console.log("Função arrow "+recebe_2);