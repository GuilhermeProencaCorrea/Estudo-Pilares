Algoritmo "Unidade 10 (Exercício 1)"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Soma os números subsequentes de um número N dado como entrada
// Autor(a)    : Guilherme Proenção Corrêa
// Data atual  : 11/03/2023
Var
// Seção de Declarações das variáveis 
i,n,soma:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite um Valor:")
leia(n)
Para i de n+1 ate n+10 passo 1 faca
soma:=soma+i
fimpara
escreval
escreva(soma)

Fimalgoritmo