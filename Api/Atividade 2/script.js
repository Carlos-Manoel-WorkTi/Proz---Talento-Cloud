const lista = document.getElementById("lista")
const url = './loja/produtos.json'

// FUNÇÃO PARA CARREGAR OS PRODUTOS NA LISTA DE PRODUTOS.
async function carregarProdutos(ordenar = 'dec', limite = 20){
    
   // OS PARÂMETROS SÃO RESPONSAVEIS POR ORDENAR E LIMITAR A LISTA DE PRODUTOS. 
    
    try{

        // const req = await fetch(`${url}ordenar=${ordenar}&limite=${limite}`)  ESTA SERIA A FORMA DE PASSAR OS PARAMETROS
       
        const req = await fetch(`${url}`) // USEI ISTO PARA FICAR FUNCIONAL JA QUE N TENHO UMA API DE VERDADE
        const converter_req = await req.json()
        
        converter_req.forEach(produto => {
            const li = document.createElement("li")
            const a = document.createElement("a")
            li.appendChild(a)
            a.innerHTML = produto.nome
            lista.appendChild(li)
        });

    }catch(e){
        console.log(e)
    }

    
    
}

carregarProdutos('asc',20)  // Chama a função sem parâmetros, pois já estão definidos na própria função para solicitar a lista de produtos em ordem alfabética inversa e limitando a 20 produtos.

