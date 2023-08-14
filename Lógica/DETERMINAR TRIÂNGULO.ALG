Algoritmo "Determinar Triângulo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Determina se dado três valores formam triângulo (função)
// Autor(a)    : "Guilherme Proença Corrêa"
// Data atual  : 06/03/2023
Var
   // Seção de Declarações das variáveis
   A,B,C:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Digite A, B e C:")
   
   escreva("A:")
   leia(A)
   
   escreva("B:")
   leia(B)
   
   escreva("C:")
   leia(C)
   
   se((A<B+C)e(B<C+A)e(C<A+B))então //1 condição de existência de um triângulo
      se((A=B)e(B=C)) entao //2 condição de triângulo com todos os lados iguais
      escreva ("Triângulo Equilatero")
      senão
       se((A=B)ou(B=C)ou(A=C))entao // 3 condição de triângulo com dois lados iguais
         escreva ("Triângulo Isósceles")
         senao
         escreva("Tríangulo Escaleno")//4 se atender a 1ª e não atender a 2ª e 3ª
      fimse
      fimse
   senao
   escreva("Valore não forman triângulo") //se 1ª não for atendida
   fimse
      


Fimalgoritmo