
function abrirNovaAba() {
    window.open('https://docs.google.com/spreadsheets/d/1jbI9wN9ny8HCJPOX66i69zdCSp6eoHNK9V5IhJ5ftMk/edit?gid=0#gid=0', '_blank');
}


const dados = {
    Nome: "Usuario123",   
    Peça: "COD1234",     
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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedidoForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
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
