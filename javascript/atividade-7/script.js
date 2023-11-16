// Informações do produto
const product = [
   
{
    name: 'Produto 1',
    description: 'Descrição do Produto 1.',
    price: 'R$ 49,99',
    imageUrl: 'https://i.pinimg.com/736x/3e/bf/39/3ebf39757e5a79e24940cbbb48fed06f.jpg'
},
{
    name: 'Produto 2',
    description: 'Descrição do Produto 2.',
    price: 'R$ 79,99',
    imageUrl: 'https://i.pinimg.com/736x/3e/bf/39/3ebf39757e5a79e24940cbbb48fed06f.jpg'
},
{
    name: 'Produto 3',
    description: 'Descrição do Produto 3.',
    price: 'R$ 99,99',
    imageUrl: 'https://i.pinimg.com/736x/3e/bf/39/3ebf39757e5a79e24940cbbb48fed06f.jpg'
}

];

document.body.innerHTML = "    <button id='btn-add'>ADICIONAR ITENS</button>"


const btn_add = document.querySelector("#btn-add")


function showElement(){
    product.forEach( p => {
        console.log(p.name,p.description,p.price,p.imageUrl);
     
        document.body.innerHTML += addElement(p.name,p.description,p.price,p.imageUrl)
      })
}

function addElement(name,description,price,img){

    this.name = name,
    this.description = description,
    this.price = price,
    this.img = img

    return (`
    <div id="product-card" class="product-card">
        <div class="product-image">
            <img  src="${img}" alt="Imagem do Produto">
        </div>
        <div class="product-details">
            <h2 class="product-title">${name}</h2>
            <p class="product-description">${description}</p>
            <p class="product-price">Preço:  ${price}</p>
        </div>
    </div>
    `)
}

  

btn_add.addEventListener("click", e => {
    btn_add.style.display = 'none'

    showElement()
})