import Stack from '../lib/stack.mjs'

let frase = 'Socorram-me, subi no ônibus em Marrocos'

let pilha = new Stack()

for(let i=0; i < frase.length; i++){
    pilha.push(frase.charAt(i))
}
console.log(pilha.print())

let reverso = ''

while(! pilha.isEmpty){
    reverso += pilha.pop()
}

console.log(reverso)
