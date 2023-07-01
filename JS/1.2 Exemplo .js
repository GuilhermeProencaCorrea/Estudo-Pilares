var idade = 15;

idade=66

if (idade < 16) {
    console.log(`Você tem ${idade} anos: Não vota`)

} else {
    if (idade < 18 || idade > 65) {
        console.log(`Você tem ${idade} anos: Voto opcional`)

    } else {
        console.log(`Você tem ${idade} anos: Voto obrigatório`) //(18 - 65)

    }
}
