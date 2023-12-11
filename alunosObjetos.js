const alunos = {
    nome: "Carlos",
    idade: 15,
    escola: "Sesi",
};

alunos.notas = [{
    matematica: "8",
    portugues: "9",
    geografia: "6",
    situacao: true,
    
}];

alunos.notas.push({
    matematica: 5,
    portugues: 4,
    geografia: 5,
    situacao: false,
});

const listadeReprovados = alunos.notas.filter(
    (notas) => notas.situacao === false
);

console.log(listadeReprovados)
