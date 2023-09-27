function mergeSort(vetor){

    //para ser divido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return vetor

    //achar o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    console.log({vetEsq, vetDir})
    
    //Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let vetRes = []
    let posEsq = 0
    let posDir = 0

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posEsq]){
            vetRes.push(vetEsq[posEsq])
        }
    }

}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

mergeSort(nums)
