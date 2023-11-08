import Stack from '../lib/stack.mjs';

let pilha = new Stack();  // instancia o objeto pilha como sendo uma Stack

console.log(pilha.print())
console.log("Pilha está vazia?", pilha.isEmpty)

pilha.push(10)
pilha.push(11)
pilha.push(12)
pilha.push(13)
pilha.push(14)
pilha.push(15)

console.log(pilha.print())

pilha.pop()
pilha.pop()

console.log(pilha.peek())

console.log(pilha.print())
console.log("Pilha está vazia?", pilha.isEmpty)

