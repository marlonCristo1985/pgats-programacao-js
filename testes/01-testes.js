
import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('deve exibir o nome do dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('mimosa'), 'MIMOSA')
    })
})