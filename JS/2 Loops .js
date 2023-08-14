//Estruturas de repetição

//Loop for
for(let i = 0; i <= 10; i++){
   //Bloco de código 
}//Sai do laço quando a condição for false

//Loop for in
for (const key in object) {
    //Bloco de código
}//Percorre os indexs de uma array ou as propriedades de um objeto

//Loop for of
for (const iterator of object) {
    //Bloco de código
}//Percorre os valores de uma array ou os valores de um objeto

//Loop while
while (condition) {//Condição false para de realizar interações
    //Bloco de código
    i++
}

//Loop do while
do {//Roda ao menos uma vez
    //Bloco de código
    i++
} while (condition);//Condição false para de realizar interações

// ------------------------------------------------------------------------------------------

for(let i=0; i <= 10 ;i++){
    console.log("(Loop for) O valor de i é: "+i);

    if(i%2){//i%2 se 0 retorna o valor falso
        console.log("i é Impar");
    }else{
        console.log("i é Par");
    }
}; //faz dez interações

const nun = [1,2,3,4,5]
for (const x in nun) {//Percorre os index da array
    console.log('(Loop for in) Index da array: '+x);
};

for (const y of nun) {//Percorre os elementos da array
    console.log('(Loop for of) Elementos da array: '+y);
};

let limite = 10;
let contador = 0;
while (contador <= limite) {//Roda se a condição for verdadeira, e assim vai até ela se torna falsa
    console.log('(Loop while) contador: '+contador);
    contador++;
}

let limite2 = 10;
let contador2 = 11;
do {//Roda aumenos uma vez!
    console.log('(Loop do while) contador 2: '+contador2);
    contador2++;
} while (contador2<limite2);//Como contador2 é maior do que limite2, sai do loop quando chega na condição.