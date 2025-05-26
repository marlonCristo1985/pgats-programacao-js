const nomeDog = 'Julius'
const pesoDog = 5
let estoqueAtualRacao = 600

let gramasPorDia = pesoDog * 30
const duracaoEstoque = Math.floor(estoqueAtualRacao/gramasPorDia)


console.log(`Nome: ${nomeDog}`)
console.log(`Peso: ${pesoDog}kg`)
console.log(`Gramas: ${gramasPorDia}g`)
console.log(`Estoque Atual: ${estoqueAtualRacao}g`)
console.log(`Dias duração Estoque: ${duracaoEstoque} dias`)