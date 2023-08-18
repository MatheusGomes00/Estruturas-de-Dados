const valores = [9, 7, 5, 3, 1]  
// a declaração de variáveis com o 'const' de constante gera uma lista imutável, 
// então os itens já gerados não podem ser modificados, entretanto podemos
// 'adicionar' um novo elemento no caso de uma lista... 

console.log(valores[2], valores[4])
console.log(valores.length) // retorna o tamanho do array

valores[5] = 55  // adiciona um item no final da lista/vetor/array
console.log(valores)

// o método push adiciona n itens depois do último item do array
count = valores.push({id:3}, false, 10+15, "texto")
console.log(count, valores)
valores.pop() // remove o ultimo item da lista
valores.pop()
valores.pop()
console.log(count, valores)