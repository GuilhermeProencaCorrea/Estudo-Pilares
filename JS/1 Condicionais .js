//Estruturas condicionais

let num1 = 2;
let num2 = 8;
let produto = 16;


if(num1*num2 == produto){ //Condicional Simples
    console.log(`Condicional simples: condição verdadeira!`)
}

if (num1*num2 == 15) {
    console.log(`Condicional composto: condição verdadeira!`)
} else {
    console.log(`Condicional composto: condição falsa!`)
}

if (num1*num2 == 17) {
    console.log(`Condicional aninhado: condição 1 verdadeira!`)
} else { if (num1*num2 == produto && produto-8 == num2) {
    console.log(`Condicional aninhado: condição 2 verdadeira!`)
} else {
    console.log(`Condicional aninhado: condição 2 falsa!`)
}
    
}

if (num1*num2 == produto) {
    if (num1*num2 == produto) {
        if (num1*num2 == produto) {
            if (num1*num2 != produto) {
                console.log(`Condicional homogênea: condições 1, 2, 3 e 4 verdadeiras!`)
            } else {
                console.log(`Condicional homogênea: uma ou outra condições 1, 2, 3 e 4 é falsa! `)
            }
        }
    }
    
}

switch (produto) {
    case 2:
        console.log(`Produto ${produto} vale 2`);
        break;
    case 3:
        console.log(`Produto ${produto} vale 3`);
        break;
    case 16:
        console.log(`Produto ${produto} vale 16`);
    break;
    default:
        console.log('Não corresponde a nenhum caso!');
        break;
}

/*

//Condicional Simples
if (condition) {
   //Bloco de codigo 
}
//Condicional Composto
if (condition) {
   //Bloco de codigo 
} else {
   //Bloco de codigo 
}
//Condicional Aninhado
if (condition) {
    //Bloco de codigo
} else { if (condition) {
    //Bloco de codigo
} else {
   //Bloco de codigo 
}
    
}
//Condicional Homogênea
if (condition) {
    if (condition) {
        if (condition) {
            //Bloco de codigo
        } else {
            //Bloco de código
        }
        
    }
    
}

//Condicional de Múltipla escolha
switch (key) {
    case value:
        //Bloco de código
    break;
    case value:
        //Bloco de código
    break;
    case value:
        //Bloco de código
    break;
    case value:
        //Bloco de código
    break;
    default:
        //Bloco de código
        break;//Opcional no final
}

*/