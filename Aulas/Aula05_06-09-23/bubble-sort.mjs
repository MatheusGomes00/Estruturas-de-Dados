let pass, comps,  trocas

function bubbleSort(vetor){
    let swap
    pass = 0, comps = 0,  trocas = 0
    
    do{
        pass++
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if(vetor[i] > vetor[i+1]){
                [vetor[i], vetor[i+1] ] = [vetor[i+1], vetor[i]]
                swap = true
                trocas++
            }
        }

    }while(swap)
}
let nums = [77, 44, 55, 33, 22, 11, 10, 3, 1]
bubbleSort(nums)
console.log(nums)
console.log({pass, comps, trocas})
