const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555500", "114444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: "1337",
        apartamento: true,
        complemento: "ap 934",
    }
];

function ligarParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligarParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda);