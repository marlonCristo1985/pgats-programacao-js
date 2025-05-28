
/*
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser
adotado com base na idade mínima definida, por
exemplo, 2 anos.

Use os operadores adequados e exiba:
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para
permitir que se o cão for de pequeno porte, pode ser
adotado independente da idade

*/


const idadeDog = 1
const idadeMinimaDog = 2
const nomeDog = 'Julius'
const porteDog = 'P'

//const aptoAdocao = idadeDog >= idadeMinimaDog ? 'apto para adoção': 'inapto para adoção'
//const aptoAdocaoPorte = porteDog === 'P' ? 'apto para adoção': idadeDog >= idadeMinimaDog ? 'apto para adoção': 'inapto para adoção'

//const aptoAdocaoPorte = idadeDog >= idadeMinimaDog || porteDog === 'P' ? 'apto para adoção': 'inapto para adoção'
const aptoAdocaoPortev2 = idadeDog >= idadeMinimaDog || porteDog === 'P'


console.log(nomeDog)
console.log(idadeDog)
//console.log (aptoAdocao)
//console.log (aptoAdocaoPorte)
//console.log (aptoAdocaoPortev2)

function verificarSePodeSerAdotado(idade, porte) {
    const aptoAdocaoPortev2 = idadeDog >= idadeMinimaDog || porteDog === 'P'
    console.log(aptoAdocaoPortev2)
}

/*
Testes:
minimo = 2
    idade 1 + porte = M -> inapto para adoção
    idade 2 + porte = M -> apto para adoção, pela idade
    idade 1 + porte = P -> apto para adoção, pelo porte
    idade 2 + porte = P -> apto para adoção, pela idade e porte
*/

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(1, 'P')
verificarSePodeSerAdotado(2, 'P')

