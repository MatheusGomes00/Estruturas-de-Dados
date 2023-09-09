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
