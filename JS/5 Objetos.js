/*
Objetos: são como variáveis, porém os objetos tem uma grade espaço para alocação de dados, são com grades container

São mutáveis: endereçados por referência, não por valor.

ex.: const nome = {propriedade:valor,...};
Adicionar propriedades no obejeto ex.: nome_do_objeto.propriedade = valor;

*/

//Criando objetos literal de objetos
const pets = {//Objeto com 4 propriedades
Espécie:"Gato",
Nome:"Nina",
Cor:"Preto",
Sexo:"Femea",
}; 
console.log(pets.Espécie);

// Definir um construtor de obejetos
const pets2 = {}; 
pets2.Nome = "Poly";
pets2.Cor = "Branca";
pets2.Sexo = "Femea";
pets2.Espécie = "Cachorro";
console.log(pets2.Espécie);

// Palavra-chave new
const pessoDados = new Object();
pessoDados.Peso= 80;
pessoDados.Altura=1.80;
pessoDados.Nome= 'Zé'
console.log(pessoDados.Altura);
// usando o Object.create()

//_______________________________________________________________________________________________//

const myObjeto = {propriedade1:'valor1',propriedade2:'valor2',propriedade3:''};
let x = myObjeto; //Não cria uma cópia do objeto myObjeto: passam a ser o mesmo objeto.
x.propriedade3 = "500";
console.log(myObjeto.propriedade3)


const celular = {}
celular.Marca = "Motorola";
celular.Modelo = "G20";
console.log(celular);



