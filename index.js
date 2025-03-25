function abrirNovaAba() {
    window.open('https://docs.google.com/spreadsheets/d/1jbI9wN9ny8HCJPOX66i69zdCSp6eoHNK9V5IhJ5ftMk/edit?gid=0#gid=0', '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedidoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const nome = document.getElementById("Nome").value;
        const peca = document.getElementById("Codigo").value;

        // Capturar a data e hora e formatá-las corretamente
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0'); 
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
        const ano = dataAtual.getFullYear();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

        // Adicionando apóstrofe para forçar o Google Sheets a tratar como texto
        const dataFormatada = `'${dia}/${mes}/${ano}'`; // Força a ser reconhecida como texto
        const horaFormatada = `'${horas}:${minutos}:${segundos}'`; // Também evita conversões indesejadas

        const dados = {
            Nome: nome,   
            Peça: peca,     
            Data: dataFormatada, 
            Hora: horaFormatada  
        };

        fetch("https://sheetdb.io/api/v1/qsdseylkcni5a", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: dados }) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao registrar o pedido.");
            }
            return response.json();
        })
        .then(data => {
            alert("Pedido registrado com sucesso!");
            form.reset(); 
            setTimeout(() => {
                location.reload(); 
            }, 500);
        })
        .catch(error => {
            alert("Erro ao registrar pedido. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
