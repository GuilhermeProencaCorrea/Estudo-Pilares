Algoritmo "URNA DE VOTAÇÃO"
// Disciplina   : [Linguagem e Lógica de Programação]
// Curso   : UNIFAA - MODULO A (DESAFIO 01)
// Descrição   : Sistema de votação (função)
// Autor(a)    : Guilherme Proença Corrêa
// Data atual  : 15/03/2023
Var
   // Seção de Declarações das variáveis

   senha,digito,i:inteiro
   //vetor dos candidatos a prefeito (armazenamento de votos)
   Herbert, Ribeiro:vetor[1..10] de inteiro
   //vetor dos candidatos a vereador (armazenamento de votos)
   Barone,Bidu,Monteiro,Joaofera:vetor[1..10] de inteiro
   //variaveis, voto prefeito e voto vereador
   voto1,voto2,votonulo1,votonulo2:inteiro
   //variaveis para soma valores dos vetores armazenamento de votos
   somaherbert,somaribeiro,somabarone,somabidu,somamonteiro,somajoaofera:inteiro
   //Variaveis do laço enquanto prefeito e equanto vereador
   p,v:inteiro
Inicio
   escreval("SISTEMA DE VOTAÇÃO - UNIFAA DESAFIO 1")
   escreval
   escreval("ESTE PROGRAMA RODARA 5 VEZES")
   escreval

   //Inicio login na urna
   para i de 1 ate 5 passo 1 faca

      escreval
      escreval("-QUANTIDADE DE VEZES QUE O PROGRAMA RODO", i,"-")
      escreval
      enquanto senha <> 2411 faca
         escreva("Senha de acesso:")
         leia(senha)
         escreva("")
         se senha<> 2411 entao
            escreval("(SENHA INCORRETA!)")
         senao
            escreva("Digite 1 para iniciar a votação ou 0 para sair:")
         fimse
      fimenquanto
      //Fim login na urna

      //Inicio sitema de votação
      leia(digito)
      Se(digito=1) então
         escreval("")
         escreval("Vote em seu candidato a Prefeito:")
         escreval("Herbert nº90")
         escreval("Ribeiro nº95")
         escreval("")
         escreval("Vote em seu candidato a Vereador:")
         escreval("Barone nº90000")
         escreval("Bidu nº90999")
         escreval("Monteiro nº95000")
         escreval("João fera nº95999")
         escreval("")
         escreval("DIGITE O NÚMERO DO CANDIDATO OU 0 PARA VOTAR EM BRACO")
         escreval("")

         //Prefeito

         //Estrutura de laço prefeito
         p:=1
         enquanto p=1 faca
            escreva("PREFEITO:")
            leia(voto1)
            escolha voto1
            caso 0
               escreval("Voto Nulo!")
               votonulo1:=votonulo1+1
               p:=0
            caso 90
               escreval("confirmado: Candidato Herbert.")
               Herbert[i]:=1
               somaherbert:=somaherbert+Herbert[i]
               p:=0
            caso 95
               escreval("confirmado: Candidato Ribeiro.")
               Ribeiro[i]:=1
               somaribeiro:=somaribeiro+Ribeiro[i]
               p:=0
            outrocaso
               escreval("(ATENÇÃO) Este número não consta entre as opções de prefeito.")
               escreval
               escreval("Por favor, digite o número do seu cadidato ou 0 para votar nulo.")
               escreval
               p:=1
            fimescolha
         fimenquanto
         //Fim da estrutura de laço prefeito

         //Fim prefeito

         //Vereador

         //Estrutura de laço vereador
         v:=1
         enquanto v=1 faca
            escreva("VEREADOR:")
            leia(voto2)
            escolha voto2
            caso 0
               escreval("Voto Nulo!")
               votonulo2:=votonulo2+1
               v:=0
            caso 90000
               escreval("Confirmado: Candidato Barone.")
               Barone[i]:=1
               somabarone:=somabarone+Barone[i]:=1
               v:=0
            caso 90999
               escreval("Confirmado: Candidato Bidu.")
               Bidu[i]:=1
               somabidu:=somabidu+Bidu[i]:=1
               v:=0
            caso 95000
               escreval("Confirmado: Candidato Monteiro.")
               Monteiro[i]:=1
               somamonteiro:=somamonteiro+Monteiro[i]:=1
               v:=0
            caso 95999
               escreval("Confirmado: Candidato João fera.")
               Joaofera[i]:=1
               somajoaofera:=somajoaofera+Joaofera[i]:=1
               v:=0
            outrocaso
               escreval("(ATENÇÃO) Este número não consta entre as opções de vereador.")
               escreval
               escreval("Por favor, digite o número do seu cadidato ou 0 para votar nulo.")
               escreval
               v:=1
            fimescolha
         fimenquanto
         //Fim da estrutura de laço vereador

         //Fim vereador

      fimse
      escreval
      escreval("VOTAÇÃO", i," ENCERRADA")
      senha:=0
      digito:=0
   fimpara
   //Fim sitema de votação

   escreval
   escreval("(VOTAÇÕES ENCERRADAS!)")
   escreval

   //Inicio login apuração
   escreva("DIGITE A SENHA PARA APURAÇÃO (1234):")
   leia(senha)
   enquanto senha <> 1234 faca
      escreval("(SENHA INCORRETA!)")
      escreval
      escreva("DIGITE A SENHA NOVAMENTE PARA APURAÇÃO! (1234):")
      leia(senha)
   fimenquanto
   //Fim login apuração
   escreval
   escreval
   //Apuração
   escreval("TOTAL DE VOTOS EM BRANCO:", votonulo1+votonulo2)
   escreval
   escreval("PREFEITO:")
   escreval("Herbert votos", somaherbert)
   escreval("Ribeiro votos", somaribeiro)
   escreval
   escreval("VEREADOR:")
   escreval("Barone votos", somabarone)
   escreval("Bidu votos", somabidu)
   escreval("Monteiro votos", somamonteiro)
   escreval("Joaofera votos", somajoaofera)













Fimalgoritmo

