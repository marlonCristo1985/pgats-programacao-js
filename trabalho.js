const geradorDeTagsDeIdentificacao = (nome) => {
    return nome.toUpperCase()
}

const verificarSePodeSerAdotado = (idade, porte) => {
    if (idade === 1 && porte === 'M') {
        const podeSerAdotado = true
        return podeSerAdotado
    }
}

function calcularConsumoDeRacao(nomeDog, estoqueAtualRacao, pesoDog) {
    let gramasPorDia = pesoDog * 300
    return gramasPorDia
}

function decidirTipoDeAtividadePorPorte(porte) {
    let atividade
    switch (porte) {
        case 'pequeno':
            atividade = ("brincar dentro de casa")
            break
        case 'médio':
            atividade = ("caminhada no quarteirão")
            break
        case 'grande':
            atividade = ("correr no parque")
            break
        default:
            atividade = ("porte inválido")
    }
    return atividade
}

async function buscarDadoAsync() {
    return 'Pipoca';
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}