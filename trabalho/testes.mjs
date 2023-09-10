<<<<<<< HEAD
// export var mensagem = "TESTE PARA O RELATÓRIO"

// // localStorage.setItem('mensagem', JSON.stringify(mensagem))
// // const mensagemString = localStorage.getItem('mensagem')
// // if(mensagem){
// //     mensagem = JSON.parse(mensagemString)
// // }

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
    { 'nome': 'Jack', 'ra': 77889, 'idade': 26, 'sexo': 'Masculino', 'media': 9, 'resultado': 'Aprovado' },
    { 'nome': 'David', 'ra': 98765, 'idade': 27, 'sexo': 'Masculino', 'media': 6, 'resultado': 'Reprovado' },
    { 'nome': 'Eve', 'ra': 13579, 'idade': 24, 'sexo': 'Feminino', 'media': 9, 'resultado': 'Aprovado' },
    { 'nome': 'Frank', 'ra': 24680, 'idade': 28, 'sexo': 'Masculino', 'media': 4, 'resultado': 'Reprovado' },
    { 'nome': 'Grace', 'ra': 11223, 'idade': 21, 'sexo': 'Feminino', 'media': 7, 'resultado': 'Aprovado' },
    { 'nome': 'Helen', 'ra': 33445, 'idade': 29, 'sexo': 'Feminino', 'media': 8, 'resultado': 'Aprovado' },
    { 'nome': 'Ivy', 'ra': 55667, 'idade': 23, 'sexo': 'Feminino', 'media': 6, 'resultado': 'Reprovado' }    
]


bubbleSort(lista_teste, (obj1, obj2) => obj1.ra > obj2.ra)

console.log(lista_teste)

=======
// Evento de clique no botão "Confirmar"
document.getElementById('inCadastrar').addEventListener('click', function () {
    const nome = document.getElementById('inNome').value;
    const ra = document.getElementById('inRa').value;
    const idade = document.getElementById('inIdade').value;
    const sexo = document.getElementById('opSexo').value;
    const media = document.getElementById('inMedia').value;
    const resultado = document.querySelector('select[name="Resultado"]').value;

    // Ler a planilha Excel existente
    fetch('TesteIntegracao.xlsx') // Substitua pelo caminho do seu arquivo Excel
        .then((response) => response.arrayBuffer())
        .then((data) => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Encontrar a próxima linha vazia para adicionar os dados
            const newRow = XLSX.utils.encode_row(worksheet['!ref'].e.r + 1);

            // Definir os valores nas células
            worksheet[`A${newRow}`] = { t: 's', v: nome };
            worksheet[`B${newRow}`] = { t: 'n', v: ra };
            worksheet[`C${newRow}`] = { t: 'n', v: idade };
            worksheet[`D${newRow}`] = { t: 's', v: sexo };
            worksheet[`E${newRow}`] = { t: 'n', v: media };
            worksheet[`F${newRow}`] = { t: 's', v: resultado };

            // Atualizar o limite da planilha
            worksheet['!ref'] = XLSX.utils.encode_range({
                s: { c: 0, r: 0 },
                e: { c: 5, r: worksheet['!ref'].e.r + 1 },
            });

            // Criar um blob para download
            const blob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });

            // Criar um link para download
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'TesteIntegracao.xlsx'; // Nome do arquivo de saída
            a.click();
        });
});
>>>>>>> 52c1711dc3fdf26e79f88e61b4da1b95dabad984
