/*
    Console API - exibe o texto informado no terminal
*/

/*
console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table(
    [
        {
            nome: 'Marlon',
            turma: '02'
        },
        {
            nome: 'João',
            turma: '02'
        }
    ]
)

//exibindo objetos no console table
const filhos = [{
    nome: 'Sofia',
    idade: 10
},{
    nome: 'Livia',
    idade: 3
}]
console.table(filhos)

*/

/*
    Constantes e Variaveis
*/

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar
 
// informacoes de um dog que nao mudam (const)
// constante precisa ser inicializada na declaração
const nome = 'Loki'
const raca = 'vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informações que mudam (let, var)
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


/*
Tipos de Dados - cadeia, inteiro, real, logico, vetor

String - cadeia
Number - inteiro/real
Boolean - logico
Array - vetor

undefined
null - valor ja foi definido como null

BigInt = Number para numeros extremamente grandes
Symbol = 'identificador único'
*/

/* Strings */

/*
'Turma 02 do PGATS' - aspas simples ou single quote
"Turma 02 do PGATS" - aspas dupas ou double quote
`Turma 02 do PGATS` - template strings
*/


// concatenação

const turma = "02"
const diaAula = "05 de Abril"

console.log ("Aula 03 da Turma " + turma + " No sábado " + diaAula)

// interpolação
console.log (`Aula 03 da Turma ${turma} No sábado ${diaAula}`)

// conta caracteres da string
console.log(turma.length)

// quebra a string em uma array de strings conforme o critério informado na função split
const nomesFamilia = "Marlon Sofia Livia   Jamile"
const nomesFamiliaSplit = nomesFamilia.split("a")
//console.log(nomesFamiliaSplit)

// deixar string todas em minusculas
console.log(nomesFamilia.toLowerCase())

// deixar string todas em maiusculas
console.log(nomesFamilia.toUpperCase())

// encontra na string um texto
console.log(nomesFamilia.includes("Marlon"))
console.log(nomesFamilia.includes("Terezinha"))

// substituir strings
console.log(nomesFamilia.replaceAll("a", "i"))

// remover espaços da string
console.log(nomesFamilia.trim())

// cortar parte da string
console.log(nomesFamilia.substring(0,3))
console.log(nomesFamilia.length)
console.log(nomesFamilia.slice(22,25))