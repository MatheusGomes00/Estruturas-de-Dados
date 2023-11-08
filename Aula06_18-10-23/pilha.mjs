/* 
Em JavaScript, você pode implementar uma estrutura de dados de pilha (stack) usando um array nativo 
ou um objeto específico para esse fim. Pilhas seguem o princípio "last in, first out" (LIFO), 
o que significa que o último elemento inserido é o primeiro a ser removido.
*/

// Criando uma pilha usando um array
const pilha = [];

// Empilhando elementos
pilha.push(1);
pilha.push(2);
pilha.push(3);

// Desempilhando elementos
const topo = pilha.pop();
console.log(topo); // Isso irá imprimir 3

// Verificando se a pilha está vazia
const vazia = pilha.length === 0;
console.log(vazia); // Isso irá imprimir false


class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(elemento) {
      this.itens.push(elemento);
    }
  
    desempilhar() {
      return this.itens.pop();
    }
  
    verificarVazia() {
      return this.itens.length === 0;
    }
  
    obterTamanho() {
      return this.itens.length;
    }
  
    obterTopo() {
      return this.itens[this.itens.length - 1];
    }
  }
  
  const minhaPilha = new Pilha();
  minhaPilha.empilhar(10);
  minhaPilha.empilhar(20);
  minhaPilha.empilhar(30);
  
  console.log(minhaPilha.obterTopo()); // Isso irá imprimir 30
  console.log(minhaPilha.verificarVazia()); // Isso irá imprimir false


/*
Pilhas são uma estrutura de dados versátil e são comumente usadas em várias aplicações práticas. 
Um exemplo comum é o uso de pilhas em algoritmos de avaliação de expressões matemáticas, 
como a notação polonesa reversa (RPN). Aqui está um exemplo de aplicação prática de pilhas em 
um programa que avalia expressões RPN:
*/

function avaliarExpressaoRPN(expressao) {
const pilha = [];
const tokens = expressao.split(' ');

for (let token of tokens) {
    if (!isNaN(token)) {
    // Se o token for um número, empilhe-o
    pilha.push(parseFloat(token));
    } else {
    // Caso contrário, é um operador
    if (pilha.length < 2) {
        throw new Error('Expressão inválida. Faltam operandos.');
    }
    const b = pilha.pop();
    const a = pilha.pop();
    switch (token) {
        case '+':
        pilha.push(a + b);
        break;
        case '-':
        pilha.push(a - b);
        break;
        case '*':
        pilha.push(a * b);
        break;
        case '/':
        pilha.push(a / b);
        break;
        default:
        throw new Error('Operador inválido: ' + token);
    }
    }
}

if (pilha.length !== 1) {
    throw new Error('Expressão inválida. Sobram operandos.');
}

return pilha[0];
}

// Exemplo de uso
const expressaoRPN = '3 4 + 2 *';
const resultado = avaliarExpressaoRPN(expressaoRPN);
console.log('Resultado:', resultado); // Isso irá imprimir 14
  

/*
Neste exemplo, a pilha é usada para armazenar números enquanto os operadores são aplicados 
aos números no topo da pilha. Isso permite a avaliação eficiente de expressões RPN.

Outras aplicações práticas de pilhas incluem:

Navegação de histórico de páginas em navegadores da web (botão "Voltar" e "Avançar").
Validação de parênteses em expressões matemáticas.
Implementação de funções de desfazer/refazer em aplicativos.
Resolução de quebra-cabeças, como a Torre de Hanoi.
Rastreamento de chamadas de função em linguagens de programação.
Implementação de recursão de cauda em algumas linguagens de programação.
Modelagem de processos em sistemas de gerenciamento de recursos.
E muito mais.
*/