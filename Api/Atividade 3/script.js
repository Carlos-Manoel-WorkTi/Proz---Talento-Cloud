const add = document.querySelector("#Add_btn");
const form = document.querySelector("form");
const successTower = document.querySelector("#success-tower");
const errorTower = document.querySelector("#error-tower");
let lista = [];


// EVENTO DE SUBMISSÃO DO FORMULÁRIO
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.querySelector("#nome").value;
  const texto = document.querySelector("#text").value;
  const valor = document.querySelector("#valor").value;

  if (nome === "" || valor === "" || texto === "") {
    errorTower.style.display = "block";
    setTimeout(() => {
      errorTower.style.display = "none";
    }, 3000); 
    console.log("Por favor, preencha todos os campos.");
    return;
  }

  let product = { nome: nome, valor: valor, descricao: texto };

  try {
    await sendProduct(product);
    
    lista.push(product);

    getProducts() // Tentei recupear os dados mas não funcionou  entao atualizei localmente
    renderizar(lista);

    // Mostrar torre de sucesso
    successTower.style.display = "block";
    setTimeout(() => {
      successTower.style.display = "none";
    }, 3000);
    
   
    
    document.querySelector("#nome").value = "";
    document.querySelector("#text").value = "";
    document.querySelector("#valor").value = "";
  } catch (error) {
    console.error("Erro ao cadastrar o produto:", error);

    // Mostrar torre de erro
    errorTower.style.display = "block";
    setTimeout(() => {
      errorTower.style.display = "none";
    }, 3000); 
  }
});

// FUNÇÃO PARA ENVIAR O PRODUTO
async function sendProduct(product) {
  try {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar o produto.");
    }
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
}
// FUNÇÃO PARA OBTENÇÃO DE PRODUTOS
async function getProducts() {
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
    console.log(response);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Erro ao obter os produtos.");
      }
    } catch (error) {
      console.error("Erro ao obter os produtos:", error);
      throw error;
    }
  }
  

// view
function renderizar(lista) {
    const ul = document.querySelector("#ul-lista");
    ul.innerHTML = ""; // Limpa a lista antes de renderizar os produtos
  
    lista.forEach((produto) => {
      const li = document.createElement("li");
      li.innerHTML = ` 
            <div style="background-color: white;width: 100%;display: flex;flex-direction: column;justify-content: center; padding: 5px; border: 1px solid gray;">
            <span style="">nome: <strong>${produto.nome}</strong></span>
            <span>preço: <strong>${produto.valor}</strong></span>
            <span>descri: <strong>${produto.descricao}</strong></span>
            </div>
      `;
      
      ul.appendChild(li);
    });
  }