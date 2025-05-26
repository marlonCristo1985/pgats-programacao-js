
/*
Crie um script para gerar uma tag para identificar o dog
a tag deve ter:
- O nome em letras maiusculas
- A raça com a primeiro maiuscula
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

