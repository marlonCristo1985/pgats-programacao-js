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