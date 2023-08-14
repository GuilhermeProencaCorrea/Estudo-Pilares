Algoritmo "Aumento de salário"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : UNIFAA
// Descrição   : Se funcionário recebe R$ 1.000 recebe aumento de 10%
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 08/03/2023
Var
// Seção de Declarações das variáveis 
salario:real
nome:caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Seja Bem Vindo!")
//Pula uma linha
escreval("")
escreval("Escreva o nome do funcionario é o salário")
escreval("")
escreva("Nome:")
leia(nome)
escreva("Salário:")
leia(salario)
escreval("")
se(salario>=1000)entao
//Não esqueça da virgula!
escreval("Aumento de: R$",salario*10/100)
escreval("")
escreval("Novo salário: R$",salario*10/100+salario)
senao
escreva("Este funcionário não atende a condição de aumento.")
fimse
escreval("")
escreval("")
Fimalgoritmo