// funcao nomeada, com parametro, sem retorno

const exibirNomeDoDog = (nome) =>{
    console.log(nome)
}

exibirNomeDoDog('pingo')

const exibirIdade = (idade) => {
    console.log(idade)
}

exibirIdade(25)


// funcao nomeada, com parametro + valor default, sem retorno

const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

exibirPorteDoDog()

const exibirPesoDog = (peso = 17.50) => {
    console.log(peso)
}

exibirPesoDog()

// funcao nomeada, com parametro, com retorno

const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

console.log (obterNomeDoDogFormatado("fAfI"))

const obterNomeDoDogMinuscula = (nome) => {
    return nome.toLowerCase()
}

console.log (obterNomeDoDogMinuscula("blEcE"))

// funcao nomeada, sem parametro, com retorno
const obterObjetoDog = () => {
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

console.log(obterObjetoDog())

const obterObjetoFamilia = () => {
    return {
        nome: "Ari",
        parentesco: "Pai",
        idade: 65
    }
}

console.log(obterObjetoFamilia())

const listarObjetosDog = () => {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    }, {
        nome: 'Bailey Maria',
        peso: 11.5
    }]
}

console.log(listarObjetosDog())

const obterObjetoFamiliaArray = () => {
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


const listarNomesDeDogs = () => {
    const nomes = [
        'Pituca',
        'Marea',
        'Anderson'
    ]
    return nomes
}

console.log(listarNomesDeDogs())

