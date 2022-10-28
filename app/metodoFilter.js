const botoes = document.querySelectorAll(".btn")

botoes.forEach(btn => btn.onclick = () => filtrarLivros(btn.value))


function filtrarLivros(categoria){
  let livrosFiltrados = 
  categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  let livrosComDesconto = aplicarDesconto(livrosFiltrados)
  exibirOsLivrosNaTela(livrosComDesconto)
  if(categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valor){
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
  </div>
  `

}