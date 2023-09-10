<<<<<<< HEAD
function voltarPaginaPrincipal() {
    window.location.href = "FrontProjeto.html"
}
document.getElementById('inVoltar').addEventListener('click', voltarPaginaPrincipal)


const listaAlunos = []

const aluno = document.getElementById('inCadastrar').addEventListener('click', function(){
=======
const listaAlunos = []
document.getElementById('inCadastrar').addEventListener('click', function () {
>>>>>>> 52c1711dc3fdf26e79f88e61b4da1b95dabad984
    const nome = document.getElementById('inNome').value
    const ra = document.getElementById('inRa').value
    const idade = document.getElementById('inIdade').value
    const sexo = document.querySelector('select[name="Sexo"]').value
    const media = document.getElementById('inMedia').value
    const resultado = document.querySelector('select[name="Resultado"]').value
<<<<<<< HEAD

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
=======
})


>>>>>>> 52c1711dc3fdf26e79f88e61b4da1b95dabad984
