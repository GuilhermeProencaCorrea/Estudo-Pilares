Algoritmo "Sálario do funcionário"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Cam base no valor do sálario realiza um aumento ou decremento
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 16/03/2023
Var
   // Seção de Declarações das variáveis
   n:inteiro
   salario, percentual, reajuste: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite o sálario do funcionário:")
   leia(salario)
   escreval
   escreval("Digite 1 para aumento ou 2 para decremento")
   leia(n)
   escreval
   escolha n
   caso 1
      escreval("Digite o percentual de aumento:")
      leia(percentual)
      reajuste:=salario+salario*(12/100)
   caso 2
      escreval("Digite o percentual de decremento:")
      leia(percentual)
      reajuste:=salario-salario*(12/100)
   fimescolha
   escreval
   escreval("Novo salátio:", reajuste)

Fimalgoritmo