let pass, comps, troca

function selectionSort(vetor, fnComp){
    pass=0, comps=0, troca=0
    for(let selecionada = 0; selecionada < vetor.length -1; selecionada++){
        pass++
        let menor = selecionada + 1
        for(let i = menor + 1; i < vetor.length; i++){
            if(fnComp(vetor[menor], vetor[i])){
                menor = i
                comps++
            }
        }
        if(fnComp(vetor[selecionada], vetor[menor])){
            [vetor[selecionada], vetor[menor]] = [vetor[menor], vetor[selecionada]]
            troca++
        }
    }
}

import {nomes} from '..//data/nomes-desord.mjs'

selectionSort(nomes, (obj1, obj2) => obj1 > obj2)

console.log(nomes)
console.log(pass, comps, troca)
