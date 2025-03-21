let pedidos = [];

        function registrarPedido() {
            let nome = document.getElementById('nome').value;
            let sobrenome = document.getElementById('sobrenome').value;
            let turno = document.getElementById('turno').value;
            let pedido = document.getElementById('pedido').value;

            if (!nome || !sobrenome || !pedido) {
                alert('Preencha todos os campos!');
                return;
            }

            pedidos.push({ Nome: nome, Sobrenome: sobrenome, Turno: turno, Pedido: pedido });
            alert('Pedido registrado com sucesso!');
            document.getElementById('pedidoForm').reset();
        }