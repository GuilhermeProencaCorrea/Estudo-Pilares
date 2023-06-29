let agora = new Date();
let diaSem = agora.getDay();
    
/*
O js representa os dias da semana como:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

//Condição Multipla

switch (diaSem){
    case 0:
        console.log('Hoje é Domingo! em JS é: '+diaSem);
        break;//saida do bloco

    case 1:
        console.log('Hoje é Segunda! em JS é: '+diaSem);
        break;
    case 2:
        console.log('Hoje é Terça! em JS é: '+diaSem);
        break;
    case 3:
        console.log('Hoje é Quarta! em JS é: '+diaSem);
        break;
    case 4:
        console.log('Hoje é Quinta! em JS é: '+diaSem);
        break;
    case 5:
        console.log('Hoje é Sexta! em JS é: '+diaSem);
        break;
    case 6:
        console.log('Hoje é Sábado! em JS é: '+diaSem);
        break;
    default:
        console.log('[ERRO] Dia invalido!');
        break; //Opcional
}