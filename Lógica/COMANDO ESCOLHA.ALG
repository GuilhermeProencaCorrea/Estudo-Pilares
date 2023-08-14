Algoritmo "Comando escolha"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Uso do camando escolha
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 10/03/2023
Var
// Seção de Declarações das variáveis 
planeta:inteiro
i:inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
i:=1
repita
i:=i+1
escreva("Temos 8 planeta no sistema solar, digite um número de 1 a 8:")
leia(planeta)
escolha planeta
caso 1
escreval("1º Mercúrio")
caso 2
escreval("2º Vênus")
caso 3
escreval("3º Terra")
caso 4
escreval("4º Marte")
caso 5
escreval("5º Jupiter")
caso 6
escreval("6º Saturno")
caso 7
escreval("7º Urano")
caso 8
escreval("8º Netuno")
fimescolha
ate i>10
Fimalgoritmo