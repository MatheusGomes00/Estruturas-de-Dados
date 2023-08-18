function inteiroAleatorio(num){
    const valor = Math.random() * num
    return  valor
}


do{
    var opcao = inteiroAleatorio(20)
    console.log(`Opção escolhida foi ${opcao}`)
}while(opcao != 1)

console.log("FIM")
