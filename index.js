
function abrirNovaAba() {
    window.open('https://docs.google.com/spreadsheets/d/1jbI9wN9ny8HCJPOX66i69zdCSp6eoHNK9V5IhJ5ftMk/edit?gid=0#gid=0', '_blank');
}

const dados = {
    Nome: "Usuario123",   
    Peças: "COD1234",     
    Data: new Date().toLocaleDateString('pt-BR')  
};

fetch("https://sheetdb.io/api/v1/qsdseylkcni5a", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
})
.then(response => response.json())
.then(data => {
    console.log("Resposta da API:", data);
})
.catch(error => console.error("Erro ao enviar:", error));
