Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 05/03/2023
Var
// Seção de Declarações das variáveis 
n1,n2,D:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite dois numeros")
leia(n1,n2)
se(n2=0)então
escreva("imposivel dividir por zero")
senao
D:=n1/n2
escreva("Resultado da divisão:",D)
fimse
Fimalgoritmo