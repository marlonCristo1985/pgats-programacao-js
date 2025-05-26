const nomeDog = "   fA$%fi  giGanTe "

let nomeFormatado = removerCaracteresEspeciaisEEspacos(nomeDog)
nomeFormatado = capitalizarPalavra(nomeFormatado)
const nomeSimples = validaNomeSimples(nomeFormatado).length ===1


console.log(`nome original: ${nomeDog}`)
console.log(`nome formatado: ${nomeFormatado} `)
console.log(`possui apenas um nome: ${nomeSimples}`)

function removerCaracteresEspeciaisEEspacos(nome){
    return nome.trim().replace(/[^a-zA-Z0-9 ]/g, '')
}
function capitalizarPalavra(nome)
{
    return nomeFormatado[0].toUpperCase() + nomeFormatado.slice(1).toLowerCase() 
}
function validaNomeSimples(nome){
    return nomeFormatado.split(/\s+/)
}


