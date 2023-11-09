// Lista de compras

import Deque from "../lib/Deque.mjs";

let listaCompras = new Deque()

console.log(listaCompras.print())
console.log("Está vazio? ", listaCompras.isEmpty)

// alimentos => inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")

console.log(listaCompras.print())

// higiene e limpeza => final
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Detergente")

console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açucar")

console.log(listaCompras.print())

listaCompras.insertFront("Fardo de Brhama")

console.log(listaCompras.print())

listaCompras.insertBack("Shampoo")

console.log(listaCompras.print())

let removido = listaCompras.removeBack()

console.log({removido})
console.log(listaCompras.print())

let primeiro = listaCompras.peekFront()
console.log({primeiro})
console.log(listaCompras.print())

let ultimo = listaCompras.peekBack()
console.log({ultimo})
console.log(listaCompras.print())
