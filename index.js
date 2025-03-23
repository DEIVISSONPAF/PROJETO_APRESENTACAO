
function abrirNovaAba() {
    window.open('https://docs.google.com/spreadsheets/d/1jbI9wN9ny8HCJPOX66i69zdCSp6eoHNK9V5IhJ5ftMk/edit?gid=0#gid=0', '_blank');
}

const dataAtual = new Date().toLocaleDateString('pt-BR');

const dados = {
    usuario: "Usuario123",
    codigoPeca: "COD1234",
    data: dataAtual 
};

fetch("https://sheetdb.io/api/v1/qsdseylkcni5a", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
})
.then(response => response.json())
.then(data => console.log("Dados enviados:", data))
.catch(error => console.error("Erro ao enviar:", error));
