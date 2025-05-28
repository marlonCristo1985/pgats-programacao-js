/*
Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

- Até 10kg -> Pequeno; acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)

*/
const nome = 'luke'
const peso = 10

const porteClassificado =  peso <=10 ? porte = 'P' : porte = 'M'
console.log(`Nome:  ${nome} Peso: ${peso} Porte Classificado: ${porteClassificado}`)

function definirPortePeloPeso(peso){
    peso <=10 ? porte = 'P' : porte = 'M'
    return porte
}

const porteDefinido = definirPortePeloPeso(25)
console.log(`Nome:  ${nome} Peso: ${peso} Porte Classificado: ${porte}`)

const definirPortePeloPesoArrow = (peso) =>{
    peso <=10 ? porte = 'P' : porte = 'M'
    return porte
}

definirPortePeloPesoArrow(10)
console.log(`Nome:  ${nome} Peso: ${peso} Porte Classificado: ${porte}`)