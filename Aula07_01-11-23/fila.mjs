import Queue from '../lib/Queue.mjs'

let fila = new Queue

console.log(fila.print())
console.log(fila.isEmpty)

fila.enqueue('São Paulo')
fila.enqueue('Flamengo')
fila.enqueue('Fluminense')
fila.enqueue('Juventus')
fila.enqueue('Barcelona')
fila.enqueue('Real Madrid')

console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

fila.enqueue('Boca Junior')

console.log(fila.print())
let proximo = fila.peek()
console.log({proximo})
