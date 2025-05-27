// funcao nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome) {
    console.log(nome)
}

function exibirIdade(idade) {
    console.log(idade)
}

exibirIdade(15)

// funcao nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND') {
    console.log(porte)
}

function exibirPesoDog(peso = 12.50) {
    console.log(peso)
}

exibirPesoDog()

// funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome) {
    return nome.toUpperCase()
}

function obterNomeDoDogMinuscula(nome) {
    return nome.toLowerCase()
}

const nomeDogMinusculo = (obterNomeDoDogMinuscula("AlEcE"))
console.log(nomeDogMinusculo)

// funcao nomeada, sem parametro, com retorno
function obterObjetoDog() {
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

function obterObjetoFamilia() {
    return {
        nome: "Ari",
        parentesco: "Pai",
        idade: 65
    }
}

const familia = obterObjetoFamilia()
console.log(familia)

function listarObjetosDog() {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    }, {
        nome: 'Bailey Maria',
        peso: 11.5
    }]
}

function obterObjetoFamiliaArray() {
    return [{
        nome: "Ari",
        parentesco: "Pai",
        idade: 68
    },
    {
        nome: "Terezinha",
        parentesco: "Mãe",
        idade: 66
    }]
}

console.log(obterObjetoFamiliaArray())

function listarNomesDeDogs() {
    const nomes = [
        'Pituca',
        'Marea',
        'Anderson'
    ]

    console.log(`Passou pela função listarNomesDeDogs`)

    return nomes
}

exibirNomeDoDog("Pipoca")
////exibirPorteDoDog()
//console.log(obterNomeDoDogFormatado("Bailey Maria"))
//console.log(obterObjetoDog())
//console.log(listarObjetosDog())
//console.log(listarNomesDeDogs())

//console.log(`--------`)

//listarNomesDeDogs()

//const nomesDeDogs = listarNomesDeDogs()