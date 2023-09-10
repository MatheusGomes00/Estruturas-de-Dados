// export var mensagem = "TESTE PARA O RELATÓRIO"

// // localStorage.setItem('mensagem', JSON.stringify(mensagem))
// // const mensagemString = localStorage.getItem('mensagem')
// // if(mensagem){
// //     mensagem = JSON.parse(mensagemString)
// // }

function bubbleSort(vetor, fnComp){
    let swap
    do{
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i], vetor[i+1])){
                [vetor[i], vetor[i+1] ] = [vetor[i+1], vetor[i]]
                swap = true
            }
        }
    }while(swap)
}

const lista_teste = [
    { 'nome': 'Alice', 'ra': 12345, 'idade': 25, 'sexo': 'Feminino', 'media': 7, 'resultado': 'Aprovado' },
    { 'nome': 'Bob', 'ra': 67890, 'idade': 22, 'sexo': 'Masculino', 'media': 5, 'resultado': 'Reprovado' },
    { 'nome': 'Carol', 'ra': 54321, 'idade': 20, 'sexo': 'Feminino', 'media': 8, 'resultado': 'Aprovado' },
    { 'nome': 'Jack', 'ra': 77889, 'idade': 26, 'sexo': 'Masculino', 'media': 9, 'resultado': 'Aprovado' },
    { 'nome': 'David', 'ra': 98765, 'idade': 27, 'sexo': 'Masculino', 'media': 6, 'resultado': 'Reprovado' },
    { 'nome': 'Eve', 'ra': 13579, 'idade': 24, 'sexo': 'Feminino', 'media': 9, 'resultado': 'Aprovado' },
    { 'nome': 'Frank', 'ra': 24680, 'idade': 28, 'sexo': 'Masculino', 'media': 4, 'resultado': 'Reprovado' },
    { 'nome': 'Grace', 'ra': 11223, 'idade': 21, 'sexo': 'Feminino', 'media': 7, 'resultado': 'Aprovado' },
    { 'nome': 'Helen', 'ra': 33445, 'idade': 29, 'sexo': 'Feminino', 'media': 8, 'resultado': 'Aprovado' },
    { 'nome': 'Ivy', 'ra': 55667, 'idade': 23, 'sexo': 'Feminino', 'media': 6, 'resultado': 'Reprovado' }    
]


bubbleSort(lista_teste, (obj1, obj2) => obj1.ra > obj2.ra)

console.log(lista_teste)

