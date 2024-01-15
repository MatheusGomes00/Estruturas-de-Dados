// function resultado(nota){
//     if(nota >= 6){
//         console.log("Aprovado com nota " + nota)
//     }else{
//         console.log("Reprovado com nota " + nota)
//     }
// }
// resultado(6)

function resultado(nota){
    if(nota >= 6){
        console.log("Aprovado com " + nota)
    }else if(nota > 3 && nota <= 6){
        console.log("Recuperação!")
    }else{
        console.log("Reprovado!")
    }
}

resultado(3)