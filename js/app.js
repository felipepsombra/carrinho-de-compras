let totalGeral;
limpar();

function adicionar() {
    //recuperar valores do formulário, nome do produto, quantidade e valor
    let produto = document.getElementById(`produto`).value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let preco = quantidadeProduto * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    if(quantidadeProduto <= 0) {
        alert('Erro! A quantidade de produtos deve ser maior que 0');
        return
    } else {
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$1400</span>
        </section>`
        totalGeral = totalGeral + preco;
        let campoTotal =  document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = '0';
    }

    }

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

