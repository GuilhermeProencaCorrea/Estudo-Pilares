 //Criamos todas as porpriedades do objeto pessoas
 class pessoa {
    constructor(Nome,Idade,Altura,Peso){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Altura = Altura;
        this.Peso = Peso;
    }
 }
var carlos = new pessoa ();
carlos.Nome = "Carlos";
carlos.Idade = 38;
carlos.Altura = 1.75;
carlos.Peso = 80;

var amanda = new pessoa ("Amanda",29,1.70,70)
 console.log(carlos);
 console.log(amanda);




