/**
Controle de petiscos

Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
Use a estrutura de repetição for contado.

Exiba:
- Cada vez que um petisco for entregue
- Quando o dog estiver satisfeito (que é quando terminar os petiscos)

Extra: transforme a lógica em uma função (da forma que conseguir)
 */



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

//-------------------------------------------
const quantidadePetiscosDisponiveis = 5

for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++) {
    console.log(`Dando Petisco de nº: ${petisco}`)
}
 console.log(`Dog Satisfeito`)
//-------------------------------------------

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