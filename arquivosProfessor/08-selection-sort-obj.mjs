let pass, comps, trocas
function selectionSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass++  
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(fnComp(vetor[posMenor] , vetor[i])){
                posMenor = i
                comps++
            }
        }
        if(fnComp(vetor[posSel] , vetor[posMenor])){
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }
    }
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'
console.time('...')
selectionSort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd("...")

console.log(objMotoristas)
// console.log({pass, comps, trocas, memoriaMB})
