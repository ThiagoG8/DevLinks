function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  // pegar a tag img e alt
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem e o alt light
   img.setAttribute('src', './assets/avatar-light.png')
   img.setAttribute('alt', 'Foto do Mayk Brito, usando óculos escuro e jaqueta preta, barba e fundo roxo e ciano')
  } else {
    // se tiver sem light mode, manter a imagem e o alt normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto do Mayk Brito, usando óculos e camisa preta, barba e fundo amarelo')
  }
}