Algoritmo "Média ponderada"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA 
// Descrição   : Faz a média ponderada das nota 1 e 2
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 16/03/2023
Var
// Seção de Declarações das variáveis 
n1,n2:inteiro
soma:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite a nota da prova 1 e 2:")
leia(n1,n2)
soma<-(n1*2+n2*3)/5
//Símbolo de atribuição <- e := (VISUAL G)
//Média ponderada (n1* peso 2 + n2* peso 3)/5 soma dos pesos
escreval("A média da é: ", soma)

Fimalgoritmo