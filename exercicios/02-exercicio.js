/**
 
Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes
mal formatados. Crie um script para limpar e padronizar
os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome
informado possui apenas uma palavra. Exiba se o
nome é válido ou não.

 */

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


