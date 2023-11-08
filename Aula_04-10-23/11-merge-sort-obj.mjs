function mergeSort(vetor, fnComp){
    if(vetor.length < 2) return vetor
    
    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    // console.log({vetEsq, vetDir})
    
    //Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)


    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(fnComp(vetEsq[posEsq], vetDir[posDir])){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra  
    // envia a sobra para o final ou inicio do vetor, sobra sempre os maiores no final
    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    }else{
        sobra = vetDir.slice(posDir)
    }
    // console.log({sobra}) notação expread, mapeia, pega tudo e concatena os dois...???
    return [ ...vetRes, ...sobra ]
}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]
// let numsOrd = mergeSort(nums)
// console.log({numsOrd})

import { objMotoristas } from "../data/motoristas-obj-desord.mjs"

var nomesObjOrd = mergeSort(objMotoristas, (elem1, elem2) => 
    elem1.nome_motorista < elem2.nome_motorista
)

console.log(nomesObjOrd)
