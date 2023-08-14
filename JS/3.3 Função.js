
// Ver média dos alunos: soma das notas dos quatro bimestres dividido por quatro
// Notas do aluno A:
let Aluno_A = media(90,65,87,57);
// Notas do aluno B:
let Aluno_B = media(29,69,70,79);

function media (n1,n2,n3,n4) {

    let mediaDasNotas = (n1+n2+n3+n4)/4;
    return mediaDasNotas;
    
}

console.log("Média do aluno A: "+Aluno_A);
console.log("Média do aluno B: "+Aluno_B);