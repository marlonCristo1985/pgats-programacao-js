
/*
Gerador de tags de identificação

Crie um script para gerar a etiqueta (tag) de
identificação que será presa na coleira de um cachorro
no abrigo. O dono irá informar nome, idade, peso, raça
e se é adotado ou não.

A tag deve ter:
- O nome em letras maiúsculas
- A raça com a primeira letra maiúscula
- Peso
*/


const nome = 'fafi'
let idade = 5
let peso = 30.0
const raca = 'vira lata'
const adotado = true


nomeMaiusculo = nome.toUpperCase()
//racaApelido = raca.slice(0,1).toUpperCase() + raca.slice(1).toLowerCase()
racaApelido = raca[0].toUpperCase() + raca.slice(1).toLowerCase()



console.log(`Nome: ${nomeMaiusculo}\nRaça: ${racaApelido} \nPeso: ${peso}`)

