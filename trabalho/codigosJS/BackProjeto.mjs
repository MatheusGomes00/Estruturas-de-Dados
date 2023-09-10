function abrirNovoHTML() {
    const opcao = document.getElementById("inTextexecucao").value 
    switch (opcao){
    case '1':
        window.location.href = "CadastroProjeto.html";
    }
}     
document.getElementById('inExecutar').addEventListener('click', abrirNovoHTML)

