// Tipos de dados em variáveis. Valores primitivos (numbers, strings e booleanos)

let nomeVariavel_number = 1; 
let nomeVariavel_string = " string ";
let nomeVariavel_boolean = true;
const nomeVariavel_array = {};
const nomeVariavel_object = []
let nomeVariavel_function = myfunction();

function myfunction(){

}


var nomeVariavel_string_aspasDuplas = "";
let nomeVariavel_string_aspasSimples = '';
var nomeVariavel_string_crase = ``;


//camelCase
var numeroDaPessoa = '';
//PascalCase
class DadosPessoas {
    constructor(estado,cidade,bairro,endereço,nome,cpf,email,telefone){
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.endereço = endereço;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
 }

 //Área de testes:

 let testeDeStrings = "\nAqui está minha mensagem!\n";
 let testeDeStrings_1 = "\nAqui está minha\nmensagem!\n";
 let testeDeStrings_2 = "\n\t Aqui está minha mensagem!\n";
 let testeDeStrings_3 = "\n\tAqui está minha \"mensagem\".  \\ \n";
 

 /*
          Caracteres de Escape
           Quebra linha----->(\n)
           Tabulação-------->(\t)
           Aspa duplas------>(\")
           Aspa simples----->(\')
           Contrabara------->(\\)
 
 */

 console.log(testeDeStrings);
 console.log(testeDeStrings_1);
 console.log(testeDeStrings_2);
 console.log(testeDeStrings_3);

