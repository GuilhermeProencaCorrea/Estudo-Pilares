const objetoPessoa = {nome:"Carlos", idade: 30, nacionalidade: "Americano",}
const matrizNumeros = [100,33,45,59,01];


for(let x in objetoPessoa){
    console.log(x +": "+ objetoPessoa[x]);
}


for(let y in matrizNumeros){
    console.log("Posição: "+y+"º "+"elemento: "+matrizNumeros[y]);
}
