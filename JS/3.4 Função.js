let nun = [1,2,3,4];

/*
É um método em JavaScript que permite iterar sobre um array e executar
uma função para cada elemento no array. Ele recebe como argumento uma 
função de retorno de chamada que define o que fazer com cada elemento. 
A função de retorno de chamada pode receber até três argumentos: o elemento
atual sendo processado, seu índice e o array sendo percorrido.
*/

// Função Arrow é uma função sem nome, usada em casos especificos
// Espressão lambda nun => (Percorre toda array) É uma função anônima que pode ser usada em várias linguagens de programação.
nun.forEach(nun => console.log(nun));

nun.forEach((nun) =>{
     console.log(nun+2)
});



