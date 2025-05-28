/**
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a
quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas

Exiba:
- Nome do dog
- Peso
- Quantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar

 */



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