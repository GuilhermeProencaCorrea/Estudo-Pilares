/*
Objetos: são como variáveis, porém os objetos tem uma grade espaço para alocação de dados, são com grades container

São mutáveis: endereçados por referência, não por valor 



ex.: const nome = {propriedade:valor,...};
Adicionar propriedades no obejeto ex.: nome_do_objeto.propriedade = valor;

*/

//Criando objetos
// literal de objetos
const animais = {Nome:"Nina1",Cor:"Preto1",Sexo:"Femea1",Espécie:"Gato1"}; //Objeto com 4 propriedades
console.log(animais.Espécie);

// Definir um construtor de obejetos
const animais2 = {}; 
animais2.Nome = "Nina2";
animais2.Cor = "Preto2";
animais2.Sexo = "Femea2";
animais2.Espécie = "Gato2";
console.log(animais2.Espécie);

// Palavra-chave new
const animais3 = new Object();
animais3.Nome="Nina3"
animais3.Cor="Preto3"
animais3.Sexo="Femea3"
animais3.Espécie="Gato3"
console.log(animais3.Espécie);
// usando o Object.create()

//_______________________________________________________________________________________________//

const animais4 = {Nome:"Nina4",Cor:"Preto4",Sexo:"Femea4",Espécie:"Gato4"};
let x = animais4; //Não cria uma cópia de animais4: passam a ser o mesmo objeto.
x.Espécie = "Cavalo";
console.log(animais4.Espécie)


const meu_celular = {}
meu_celular.Marca = "Motorola";
meu_celular.Modelo = "G20";
console.log(meu_celular);



