function operacoesBasicas(a, b) {
    const resultado = `
        <div>
            <p>${a} + ${b} = ${a + b}</p>
            <p>${a} - ${b} = ${a - b}</p>
            <p>${a} x ${b} = ${a * b}</p>
            <p>${a} / ${b} = ${a / b}</p>
        </div>
    `;
    document.getElementById("area-atividade6").innerHTML = resultado;
}

// Exemplo de uso da função
operacoesBasicas(7, 2);
