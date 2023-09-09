function voltarPaginaPrincipal() {
    window.location.href = "FrontProjeto.html"
}
document.getElementById('inVoltar').addEventListener('click', voltarPaginaPrincipal)


const listaAlunos = []

const aluno = document.getElementById('inCadastrar').addEventListener('click', function(){
    const nome = document.getElementById('inNome').value
    const ra = document.getElementById('inRa').value
    const idade = document.getElementById('inIdade').value
    const sexo = document.querySelector('select[name="Sexo"]').value
    const media = document.getElementById('inMedia').value
    const resultado = document.querySelector('select[name="Resultado"]').value

    const aluno = {
        nome: nome,
        ra: ra,
        idade: idade,
        sexo: sexo,
        media: media,
        resultado: resultado
    }
    
    document.getElementById('inNome').value = ''
    document.getElementById('inRa').value = ''
    document.getElementById('inIdade').value = ''
    document.querySelector('select[name="Sexo"]').value = ''
    document.getElementById('inMedia').value = ''
    document.querySelector('select[name="Resultado"]').value = ''

    return aluno})

listaAlunos.push(aluno)


// console.log(listaAlunos)
