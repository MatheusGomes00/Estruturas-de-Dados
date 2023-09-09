// navegação pelo menu
document.addEventListener('DOMContentLoaded', function () {
    const btExecutar = document.getElementById('inExecutar')

    if(btExecutar){
        btExecutar.addEventListener('click', function () {
            const opcao = document.getElementById("inTextexecucao").value 
            
            switch (opcao){
                case '1':
                    window.location.href = "CadastroProjeto.html"
                default:
                    break
            }
        })
    }
})

// opção de voltar da página de cadastro   
document.addEventListener('DOMContentLoaded', function (){
    const btVoltar = document.getElementById('inVoltar')

    if(btVoltar){
        btVoltar.addEventListener('click', function (){
            window.location.href = "FrontProjeto.html"
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
    const aluno = {
        'nome': nome,
        'ra': ra,
        'idade': idade,
        'sexo': sexo,
        'media': media,
        'resultado': resultado
    }
    return aluno
}
// cadastra aluno dentro da 'listaAlunos'
var listaAlunos = []
document.addEventListener('DOMContentLoaded', function (){
    btConfirma = document.getElementById('inCadastrar')
    
    if(btConfirma){
        btConfirma.addEventListener('click', function (){
            aluno = coletaDados()
            listaAlunos.push(aluno)
            document.getElementById('inNome').value = ''
            document.getElementById('inRa').value = ''
            document.getElementById('inIdade').value = ''
            document.querySelector('select[name="Sexo"]').value = ''
            document.getElementById('inMedia').value = ''
            document.querySelector('select[name="Resultado"]').value = ''
                   
        })
    }
})

// torna a 'listaAlunos' disponível para acessar em outras páginas
localStorage.setItem('listaAlunos', JSON.stringify(listaAlunos))
const listaAlunosString = localStorage.getItem('listaAlunos')
if(listaAlunosString){
    listaAlunos = JSON.parse(listaAlunosString)
}

console.log(listaAlunos)
