
let mutiplosParesDe = 3;

//Função void e com parâmetro

function myfunction (p1){//Função com parâmetro e com retorno
    //Trás somente os múltiplos pares do valor especificado na variavel (mutiplosParesDe)
    let i = 0;
    while(i<=10){
    if (p1*i % 2 == 0) {
        console.log(`${p1*i} => ${p1} x ${i}`);
    };
    i++
    };
};
console.log(myfunction(mutiplosParesDe));