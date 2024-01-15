let pass, comps, troca

function selectionSort(vetor){
    pass=0, comps=0, troca=0
    for(let selecionada = 0; selecionada < vetor.length -1; selecionada++){
        pass++
        let menor = selecionada + 1
        for(let i = menor + 1; i < vetor.length; i++){
            if(vetor[menor] > vetor[i]){
                menor = i
                comps++
            }
        }
        if(vetor[selecionada] > vetor[menor]){
            [vetor[selecionada], vetor[menor]] = [vetor[menor], vetor[selecionada]]
            troca++
        }
    }
}

let nums = [77, 44, 55, 33, 22, 11, 10, 3, 1]
selectionSort(nums)
console.log(nums)
console.log(pass, comps, troca)
