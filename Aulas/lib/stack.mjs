export default class Stack{
 
    #data //vetor privado

    constructor(){
        this.#data = []
    }

    push(val){  // insere item
        this.#data.push(val)
    }

    pop(){  // 'remove' item
        return this.#data.pop()
    }

    peek(){  // espiadinha no topo, último item adicionado
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){  // verifica se tem itens
        return this.#data.length === 0
    }

    print(){  // retorna a string
        return JSON.stringify(this.#data)
    }
}