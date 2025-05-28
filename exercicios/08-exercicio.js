
const estoquePetiscos = 10
const dogSatisfeito = 11

//sem função
for (let qtdDiariaPetiscos = 1; qtdDiariaPetiscos <= estoquePetiscos; qtdDiariaPetiscos++) {
    console.log(`petisco fornecido`)
    if (qtdDiariaPetiscos === dogSatisfeito) {
        console.log(`Dog Satisfeito`)
        return
    }
}
console.log(`estoque finalizado sem deixar o Dog Satisfeito`)

// com funcao tradicional
function dogAlimentado(estoquePetiscos, dogSatisfeito) {
    for (let qtdDiariaPetiscos = 1; qtdDiariaPetiscos <= estoquePetiscos; qtdDiariaPetiscos++) {
        console.log(`petisco fornecido`)
        if (qtdDiariaPetiscos === dogSatisfeito) {
            console.log(`Dog Satisfeito`)
            return
        }
    }
    console.log(`estoque finalizado sem deixar o Dog Satisfeito`)

}

dogAlimentado(10,11)