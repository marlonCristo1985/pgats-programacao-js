
/**
Contador de satisfação de passeio

Crie um script que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que
ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

Use a estrutura de repetição while.

Exiba:
- Qual o número da volta atual
- Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)

 */

let qtdVoltasNaQuadra = 5
let qtdVoltasAtual = 1


// sem funcao
while (qtdVoltasAtual <= qtdVoltasNaQuadra) {
    console.log(qtdVoltasAtual)
    if (qtdVoltasAtual === 5) {
        console.log(`Dog satisfeito, quantidade de voltas: ${qtdVoltasAtual}`)
    }
    qtdVoltasAtual++
}

while (qtdVoltasAtual <= qtdVoltasNaQuadra) {
    console.log(qtdVoltasAtual)
}
console.log(`Dog Satisfeito`)

// com funcao tradicional
function verificarDogSatisfeito(qtdVoltasNaQuadra, qtdVoltasAtual) {
    while (qtdVoltasAtual <= qtdVoltasNaQuadra) {
        console.log(qtdVoltasAtual)
        if (qtdVoltasAtual === 5) {
            console.log(`Dog satisfeito, quantidade de voltas: ${qtdVoltasAtual}`)
        }
        qtdVoltasAtual++
    }
}

// com funcao de seta
const verificarDogSatisfeito = (qtdVoltasNaQuadra, qtdVoltasAtual) => {
    while (qtdVoltasAtual <= qtdVoltasNaQuadra) {
        console.log(qtdVoltasAtual)
        if (qtdVoltasAtual === 5) {
            console.log(`Dog satisfeito, quantidade de voltas: ${qtdVoltasAtual}`)
        }
        qtdVoltasAtual++
    }
}

verificarDogSatisfeito(5,0)