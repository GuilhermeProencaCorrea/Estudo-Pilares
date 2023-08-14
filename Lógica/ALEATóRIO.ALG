Algoritmo "Aleatório"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Pegar número aleatórios de um intervalo e escrever na tela
// Autor(a)    : Guilherme
// Data atual  : 10/03/2023
Var
// Seção de Declarações das variáveis 
i, numero:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

para i de 1 ate 5 faca//Estrutura de repetição (roda o código 5 vezes)
//Função randi pega um número aleatório de 1 até 100
numero:=randi(100)
escreva(numero)//Escreve o número na tela
fimpara
escreval//Pula linha
para i de 1 ate 10 faca//Roda o código 10 vezes
numero:= randi(1000)//Randi de 1 até 1000
escreva(numero)
fimpara

Fimalgoritmo