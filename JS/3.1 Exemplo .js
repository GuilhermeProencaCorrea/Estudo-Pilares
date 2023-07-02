let nun = [1,2,3,4];

nun.forEach(nun => console.log(nun+1));

/*
Espressão lambda nun => (Percorre toda array)
Função Arrow é uma função sem nome, usada em casos especificos. 
*/ 

function media (n1,n2,n3,n4) {

    let mediaDasNotas = (n1+n2+n3+n4)/4;
    return mediaDasNotas;
    
}

let minhasNotas = media(10,9,7,8);
console.log(minhasNotas);