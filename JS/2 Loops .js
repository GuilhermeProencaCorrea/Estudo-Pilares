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

/*

for(variável de controle; condição; contador){
   //bloco de código 
}

Incremento do i:       
i++ ou i+=1 ou i=i+1

*/


/*

//Loops

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
}

while (condition) {
    
}

do {
    
} while (condition);

*/