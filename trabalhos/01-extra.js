/*Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings. */

const filtrarNumerosDaLista = (listaInteirosEStrings) =>
{
    return listaInteirosEStrings.filter(elemento => typeof elemento === "number");
}

const listaInteirosEStrings = ['s','a',10,'h','b','100', 30]
console.log (filtrarNumerosDaLista(listaInteirosEStrings))
