
// Quatro tipos básicos:
// Função com parametro (params) e com retorno (return)
// Função com  parametro e sem retorno
// Função sem  parametro e com retorno
// Função sem  parametro e sem retorno

// Uma função é um bloco de código reutilizável que pode receber parâmetros, executar uma ação e retornar um valor, se necessário.

function name (params) {
    //Bloco de código
    return//Retorna dados
}

// Função arrow / Arrow function

// ------------------------------------------------------------------------------------------

//Função arrow com retorno e com parâmetro
const multiplicacao = (p1,p2) =>{
    const produto = p1*p2;
    return produto;
};
//Função arrow com retorno e com parâmetro
var divisao = (p1,p2) => p1/p2;//Entende como return

const operacaoMul = multiplicacao(3,9);//Passa os valores para o parâmetros e recebe o resultado
const operacaoDiv = divisao(6,8);

console.log("Função arrow Multiplicação: "+operacaoMul);
console.log("Função arrow Divisão: "+operacaoDiv);