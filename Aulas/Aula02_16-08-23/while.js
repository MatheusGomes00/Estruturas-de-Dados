function inteiroAleatorio(num){
    const valor = Math.random() * num
    return Math.floor(valor)
}

var opcao = 0
while(opcao != 1){
    opcao = inteiroAleatorio(15)
    console.log(`Opção escolhida foi ${opcao}`)
    // break
}
console.log("FIM")
