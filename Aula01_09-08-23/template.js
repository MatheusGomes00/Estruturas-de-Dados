// template é usar o f"...{}" do python, em javascript utilizamos `...${}`

const nome = "Matheus"

const template = `Olá ${nome}!` 

console.log(template)

function maiusculo(n){
    return n.toUpperCase()
}

console.log(`Olá... ${maiusculo("fatecanos")}!`)
