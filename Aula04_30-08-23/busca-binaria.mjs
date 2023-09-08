function buscaBinaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){

    // achar a metade do meu vetor
        let meio = Math.floor((ini + fim) / 2)
        
        if(valorBusca === vetor[meio]){
            return meio
        }
        else if(valorBusca > vetor[meio]){
            ini = meio + 1
        }
        else{
            fim = meio - 1
        }
    }
    return -1
}
// let lista2 = [33, 55, 31, 22, 1, 0, 50, 123, 55, 12, 23]

let lista = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
// lista2.sort()
//console.log(lista2)
console.log("Posição do número 22: ", buscaBinaria(lista, 77))
// console.log("Posição do número 22: ", buscaBinaria(lista2, 55))
import {nomes} from '..//data/vetor-nomes.mjs'
console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`)
