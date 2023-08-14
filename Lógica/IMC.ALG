Algoritmo "IMC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Calcula IMC
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 07/03/2023
Var
// Seção de Declarações das variáveis 
altura, peso:real
idade:inteiro
IMC:real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite seu peso, altura e idade:")
escreva("Idade:")
leia(idade)
escreva("Peso:")
leia(peso)
escreva("Altura:")
leia(altura)
IMC:=(peso/altura^2)
se(IMC<25) entao
escreval("Está no peso ideal")
fimse
se(idade>40)entao
escreva("Aulas de hidroginástica")
senao
escreva("Aulas de aeróbica")
fimse
Fimalgoritmo
