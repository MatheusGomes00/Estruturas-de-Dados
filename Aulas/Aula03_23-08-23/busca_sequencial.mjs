function buscaSequencial(vetor, valorBusca){
    for(let x = 0; x < vetor.length; x++){
        // == é igual (não verifica tipo)?, === é extremamente igual (verifica tipo)?    
        if (valorBusca === vetor[x]) return x
    }
    return -1
}

import { nomes } from './data/vetor-nomes.mjs'

console.time("Buscando...")
console.log('Posição MATHEUS: ' + buscaSequencial(nomes, "ALEXANDRE"))
console.timeEnd("Buscando...")  // precisa ter a mesma 'descrição' do comando 'console.time()'


// const frutas = ['maçã', 'uva', 'graviola', 'mamao']

// var valor = require("Entre com uma fruta: ")

// console.log(buscaSequencial(frutas, valor))
// // console.log(buscaSequencial(frutas, "mamao"))
