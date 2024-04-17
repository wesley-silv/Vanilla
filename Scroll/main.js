document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o elemento que deseja modificar
  const fixedElement = document.getElementById('header-scroller')

  // Armazena a posição inicial do elemento
  const initialPosition = fixedElement.offsetTop

  // Adiciona um event listener para o evento de scroll
  window.addEventListener('scroll', function () {
    // Obtém a posição atual de rolagem vertical da página
    const scrollPosition = window.scrollY

    // Verifica se o scroll passou da posição inicial do elemento
    if (scrollPosition > initialPosition) {
      // Se passou, muda o estilo para position: fixed
      fixedElement.style.position = 'fixed'
      fixedElement.style.top = '0'
    } else {
      // Se não, volta ao estilo original
      fixedElement.style.position = 'block'
      fixedElement.style.top = 'auto'
    }
  })
})
