const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

btnOrdenarPorPreco.onclick = () => ordenarLivrosPorPreco()

function ordenarLivrosPorPreco(){
  livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livros)
}