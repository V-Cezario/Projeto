function toggleMode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de cachorro caramelo de focinho preto, chamado Jorge, o fundo da foto é uma parede bege"
    )
    //se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./Assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de uma dalmata com coleira roxa, chamada Izzie, no fundo da foto há uma planta em um vaso marrom"
    )
  }
}
