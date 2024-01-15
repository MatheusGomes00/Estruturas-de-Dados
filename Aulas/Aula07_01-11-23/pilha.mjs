let frase = "Socorram-me, subi no ônibus em Marrocos"

let vetor = []

for(let i=0; i < frase.length; i++){
    vetor.push(frase.charAt(i))
}

// vetor.unshift('X')  // insere na primeira posição [0] o X
// vetor.splice(11, 0, 'W')  // insere na 12º posição o W
// vetor.splice(23, 1)  // remove o 24º item do vetor

console.log(vetor)

let reverso = ''
while(vetor.length > 0){
    reverso += vetor.pop()
}
console.log(reverso)
