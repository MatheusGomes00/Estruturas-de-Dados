function buscaBinaria(vetor, valorBusca) {
  let ini = 0;
  let fim = vetor.length - 1;

  while (fim >= ini) {
    let meio = Math.floor((ini + fim) / 2);

    if (valorBusca === vetor[meio]) {
      return meio;
    } else if (valorBusca > vetor[meio]) {
      ini = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  return -1;
}

let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log("Posição do número 33: ", buscaBinaria(nums, 33))
console.log("Posição do número 77: ", buscaBinaria(nums, 77))
console.log("Posição do número 81: ", buscaBinaria(nums, 81))

import {nomes} from './data/vetor-nomes.mjs'

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`)