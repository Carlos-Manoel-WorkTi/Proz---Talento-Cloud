// Capturando os elementos
const titulo = document.getElementById("titulo");
const ulElement = document.querySelector("ul");
const olElement = document.getElementById("lista-ordenada");

// Adicionando conteúdo aos elementos
titulo.innerText = "Título da Página";
ulElement.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";
olElement.innerHTML = "<li><a href='https://www.youtube.com'>Link 1</a></li><li><a href='https://www.google.com'>Link 2</a></li><li><a href='https://www.facebook.com'>Link 3</a></li>";
