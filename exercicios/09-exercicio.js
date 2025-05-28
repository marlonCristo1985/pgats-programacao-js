/**
Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir)
 */

const listaDeBrinquedos = [
    'Bola',
    'Osso',
    'Corda',
    'Sino'
]

// sem funcao
console.log(`---------------------------`)
console.log(`SEM FUNCAO`)
console.log(`---------------------------`)

listaDeBrinquedos.forEach(brinquedo => {
    console.log(`Entregando o brinquedo: ${brinquedo}`)
})
console.log(`Todos os brinquedos foram entregues`)


// com funcao tradicional
console.log(`---------------------------`)
console.log(`FUNCAO TRADICIONAL`)
console.log(`---------------------------`)

function entregarBrinquedosDog(listaDeBrinquedos) {
    listaDeBrinquedos.forEach(brinquedo => {
        console.log(`Entregando o brinquedo: ${brinquedo}`)
    })
    console.log(`Todos os brinquedos foram entregues`)

}

entregarBrinquedosDog(listaDeBrinquedos)

// com funcao de seta
console.log(`---------------------------`)
console.log(`FUNCAO DE SETA`)
console.log(`---------------------------`)
const entregarBrinquedosDogArrow = (listaDeBrinquedos) => {
    listaDeBrinquedos.forEach(brinquedo => {
        console.log(`Entregando o brinquedo: ${brinquedo}`)
    })
    console.log(`Todos os brinquedos foram entregues`)
}

entregarBrinquedosDogArrow(listaDeBrinquedos)

console.log(`---------------------------`)

// outro exemplo com um array de objetos
console.log(`Array de objetos`)
console.log(`---------------------------`)

const listaDeBrinquedosECor = [
{
    nome:'Bola',
    cor:'Branca e Preta'
},
{
    nome:'Osso',
    cor:'Cinza'
}
]
listaDeBrinquedosECor.forEach(brinquedo =>{
    console.log(`Entregando o brinquedo ${brinquedo.nome}, de cor ${brinquedo.cor}`)
})