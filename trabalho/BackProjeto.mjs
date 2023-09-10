var listaAlunos = JSON.parse(localStorage.getItem('listaAlunos')) || []


document.addEventListener('DOMContentLoaded', function () {
    const btExecutar = document.getElementById('inExecutar')
    const btVoltar = document.getElementById('inVoltar')
    const btConfirma = document.getElementById('inCadastrar')


    // navegação pelo menu e processamento de relatórios
    if(btExecutar){
        btExecutar.addEventListener('click', function () {
            const opcao = document.getElementById("inTextexecucao").value 
            
            switch (opcao){
                case '1':
                    window.location.href = "CadastroProjeto.html"
                    listaAlunos = []
                default:
                    break
                case '2':
                    bubbleSort(listaAlunos, (obj1, obj2) => obj1.nome > obj2.nome)
                    carregaLocalStorage(listaAlunos)
                    const balao = document.getElementById('relatorio1')
                    balao.style.display = 'block'
                    const btFechar = document.getElementById("fecharBalao")
                    btFechar.addEventListener('click', function (){
                        balao.style.display = 'none'
                    })
                    break
            }
        })
    }

    // opção de voltar da página de cadastro 
    if(btVoltar){
        btVoltar.addEventListener('click', function (){
            window.location.href = "FrontProjeto.html"
        })
    }

    // cadastra aluno dentro da 'listaAlunos'
    if(btConfirma){
        btConfirma.addEventListener('click', function (){
            var aluno = coletaDados()
            listaAlunos.push(aluno)
            carregaLocalStorage(listaAlunos)
            
            document.getElementById('inNome').value = ''
            document.getElementById('inRa').value = ''
            document.getElementById('inIdade').value = ''
            document.querySelector('select[name="Sexo"]').value = ''
            document.getElementById('inMedia').value = ''
            document.querySelector('select[name="Resultado"]').value = ''                   
        })
    }

})


function coletaDados(){
    const nome = document.getElementById('inNome').value
    const ra = document.getElementById('inRa').value
    const idade = document.getElementById('inIdade').value
    const sexo = document.querySelector('select[name="Sexo"]').value
    const media = document.getElementById('inMedia').value
    const resultado = document.querySelector('select[name="Resultado"]').value
    return {
        'nome': nome,
        'ra': ra,
        'idade': idade,
        'sexo': sexo,
        'media': media,
        'resultado': resultado
    }
}


function carregaLocalStorage(listaAlunos){
    localStorage.setItem('listaAlunos', JSON.stringify(listaAlunos))
}


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
    { 'nome': 'David', 'ra': 98765, 'idade': 27, 'sexo': 'Masculino', 'media': 6, 'resultado': 'Reprovado' },
    { 'nome': 'Eve', 'ra': 13579, 'idade': 24, 'sexo': 'Feminino', 'media': 9, 'resultado': 'Aprovado' },
    { 'nome': 'Frank', 'ra': 24680, 'idade': 28, 'sexo': 'Masculino', 'media': 4, 'resultado': 'Reprovado' },
    { 'nome': 'Grace', 'ra': 11223, 'idade': 21, 'sexo': 'Feminino', 'media': 7, 'resultado': 'Aprovado' },
    { 'nome': 'Helen', 'ra': 33445, 'idade': 29, 'sexo': 'Feminino', 'media': 8, 'resultado': 'Aprovado' },
    { 'nome': 'Ivy', 'ra': 55667, 'idade': 23, 'sexo': 'Feminino', 'media': 6, 'resultado': 'Reprovado' },
    { 'nome': 'Jack', 'ra': 77889, 'idade': 26, 'sexo': 'Masculino', 'media': 9, 'resultado': 'Aprovado' }
]
