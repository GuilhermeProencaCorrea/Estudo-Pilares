
//!Programa de computador: lista de "instruções" a serem "executadas" por um computador.
//!Linguagem de programação: conjuntos de palavras, camandos e instruções; com a finalidade de orientar o computador a realizar tarefas.
//!Programa JavaScript é uma lista de instruções de programação. São executadas, uma a uma, na mesma ordem em que são escritas.
//!As instruções JavaScript são compostas por: Valores, operadores, expressões, palavras-chave e comentários.
//!Instruções JavaScript: podem ser agrupadas em blocos de código, entre chaves {...} => definir instruções a serem executadas juntas.

//!Instruções JavaScript geralmente começam com uma palavra-chave para identificar a ação JavaScript a ser executada.

//? Var => Declara uma variável;
//? let => 	Declara uma variável de bloco;
//? const => Declara uma constante de bloco;
//? if => Bloco de instruções a serem executadas em uma condição;
//? switch => bloco de instruções a serem executadas em diferentes casos;
//? for => Bloco de instruções a serem executadas em um loop;
//? function => bloco de codigo reutilizável;
//? return => Sai de uma função retornado valor;
//? try => Implementa o tratamento de erros para um bloco de instruções;

//! Tipos de dados em variáveis, valores primitivos (numbers, strings e booleanos), funções, obejetos, arrays...;

//?Variáveis armazenam valores temporários e Constantes armazenas valores que não sofre alteração no decorrer do código
//?JavaScript é fracamente tipado (reconhece valore automaticamente)
//?var não possui estrutura de bloco, já let e const possui

//!Sinal de atribuição: =
//!camelCase nomear variaveis, constantes, funções, obejetos, arrays...
//!Nomear variaveis começar com letra, underline ou  cifrão. Podemos usar letras (a-z), (A-Z), (_) underline e ($) cifrão

let number = 12; //!Ponto e vírgula separam instruções (boa prática).
console.log(number);
let string = " ";
let booleano = true;
const meuObejeto = {};
const meuArray = [];
let minhaFuncao = soma (2,9);
// let meuObjetoHtml = document.getElementById(" ");
function soma (n1,n2) {
    return n1 + n2;
}



let myText = 'Meu texto!';

//?Mostra o tamalho da string (número de caracteres e espaço)
console.log(myText.length)
//?Mostra o caractere na posição indicada entre []
console.log(myText[0])
//?Converte a string para caixa alta
console.log(myText.toUpperCase())
//?Converte a string para caixa baixa
console.log(myText.toLowerCase())

//!Inputs: entrada de dados e Outputs: saida de dados
//?Input ex.:
// let dadoDeEntrada = prompt("Digite um número:");
//?Output ex.:
// console.log(dadoDeEntrada);


//!Caracteres de Escape
let text = "1 \n 2 3 4  \"5\"";
console.log(text);

//?Quebra linha----->(\n)
//?Tabulação-------->(\t)
//?Aspa duplas------>(\")
//?Aspa simples----->(\')
//?Contrabara------->(\\)
 