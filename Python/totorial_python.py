
print("Hello Word!")

print("  /|")
print(" / |")
print("/__|")

print("3333               3333")
print("33 33             33 33")
print("33  33           33  33")
print("33   33         33   33")
print("33    33       33    33")
print("33     33     33     33")
print("33      33   33      33")
print("33       33 33       33")
print("33        333        33")

nome = "Python"

print(nome + " é incrivel!")

teste_logico = 5>2

print("O teste retorna: "+str(teste_logico))


numero_um = 33

numero_dois = 3

if numero_um > numero_dois:
    print(str(numero_um)+" é maior que "+str(numero_dois)+"!") 
    #?Bloco de código

text = "GUILHERME"


#! \n \" \ caracteres de escape

print("O texto "+text+" está em caixa alta: "+ str(text.isupper())) #!Vê se a string está em caixa alta, se tive retorna um true

print("Número de caracteres da palavra "+text+": "+str(len(text))) #!Trás o número de caracteres

print("Converter a palavra "+text+" em caixa baixa: "+str(text.lower())) 
#!Converte em caixa baixa

print("Converter a palavra "+text+" em caixa alta: "+str(text.upper()))
#!Converte em caixa alta


#! Soma + Subtração - Multiplicação * Divisão / ()
#! Mod % retorna o resto da divisão 

num_operacoe = (20 * 2 + 4) / 2

print(int(num_operacoe)) #! Converte em inteiro

numero_quaquer = 214
num_mod = numero_quaquer % 2

if num_mod == 0:
    print("O número "+str(numero_quaquer)+" é par!") #?Bloco de código
else:
    print("O número "+str(numero_quaquer)+" é ímpar!")
