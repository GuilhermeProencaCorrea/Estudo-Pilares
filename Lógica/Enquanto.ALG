Algoritmo "Exercício"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Soma todos os multiplos de três
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 27/03/2023
Var
   // Seção de Declarações das variáveis
   numero,soma:real
   i:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   i:=1
   enquanto (i<>0) faca
   leia(numero)
      se(numero mod 3 = 0 )entao
         soma:=soma+numero
         se(numero=0)entao
            i:=0
         fimse
      fimse
   fimenquanto

Fimalgoritmo