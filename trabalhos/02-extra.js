/*
Retorne o número de vogais no texto fornecido. 
Consideraremos a, e, i, o e u como vogais para este Kata. 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
*/

const textoFornecido = 'Pós graduação em automAçãO de Testes'

function somenteVogais (textoFornecido){
    return textoFornecido.match(/[aeiouáéíóúàèìòùâêîôûãõäëïöüAEIOUÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ]/g)?.join('') || ''
}

contarVogais = somenteVogais(textoFornecido).length

console.log(somenteVogais(textoFornecido))
console.log(contarVogais)


