const peso1 = 1.0
const peso2 = Number("2")

// console.log(typeof peso1)
// console.log(typeof peso2)
// console.log(typeof peso1 + peso2)

const avaliacao1 = 9.734
const avaliacao2 = 5.987

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const nota = total / (peso1 + peso2)

document.getElementById("root").innerHTML = nota
// Aqui, o conteúdo da página HTML é atualizado usando o método getElementById() para selecionar o 
// elemento com o id "root" e, em seguida, a propriedade innerHTML é usada para definir o conteúdo 
// desse elemento como o valor da variável 'nota'.
// 'document': É um objeto global no navegador que representa o documento HTML carregado na janela 
// ou guia. Ele fornece uma interface para interagir com os elementos da página.
//'getElementById("root")': Este é um método do objeto document que busca um elemento HTML no 
// documento pelo seu atributo id. No exemplo dado, está procurando um elemento com o id "root". 
// Isso presumivelmente se refere a um elemento em sua página HTML com o atributo id definido como 
// "root".
// .innerHTML: É uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento. 
// Quando você lê essa propriedade, ela retorna o conteúdo HTML dentro do elemento. Quando você a 
// atribui, substitui o conteúdo HTML existente pelo novo.