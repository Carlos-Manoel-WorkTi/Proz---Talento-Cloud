// Informações do produto
const product = {
    name: 'Produto Complexo',
    description: 'Esta é uma descrição mais detalhada do produto.',
    price: 'R$ 129,99',
    imageUrl: 'caminho/da/imagem.jpg' // Insira o caminho real da imagem
  };
  
  // Adicionando um título ao site com o id 'titulo'
  const title = document.getElementById('titulo');
  title.textContent = 'Título Complexo';
  
  // Criando a representação do produto usando innerHTML
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');
  
  productContainer.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Preço: ${product.price}</p>
      <img src="${product.imageUrl}" alt="Imagem do Produto">
  `;
  
  // Adicionando o container do produto ao final do body
  document.body.appendChild(productContainer);
  