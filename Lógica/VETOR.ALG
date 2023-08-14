Algoritmo "Vetor"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Calcula a média do aluno com base na provas do bimestre
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 10/03/2023
Var
// Seção de Declarações das variáveis 
nota: vetor[1..4] de inteiro //Vetor
i, soma:inteiro
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
 para i de 1 ate 4 faca
 escreva("Escreva a nota do", i, "º bimestre:")
 leia(nota[i])
 soma:=soma + nota[i]
 fimpara
 escreva("Média do aluno:",soma/4)

Fimalgoritmo