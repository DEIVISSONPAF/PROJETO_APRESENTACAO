let pedidos = [];

        function registrarPedido() {
            let nome = document.getElementById('Nome').value;
            let codigo = document.getElementById('Codigo').value;
            let quantidade = document.getElementById('Quantidade').value;

            if (!nome || !codigo || !pedido) {
                alert('Preencha todos os campos!');
                return;
            }

            pedidos.push({ Nome: nome, Codigo: codigo, Quantidade: quantidade });
            alert('Pedido registrado com sucesso!');
            document.getElementById('pedidoForm').reset();
        }