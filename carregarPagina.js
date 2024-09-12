function carregarFormulario() {
    location = "formulario.html"
}

function carregarPagina() {
 direcionamentoDePagina ();
}

function mostrarModal() {
    const modal = document.getElementById('meuModal');
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('meuModal');
    modal.style.display = 'none';
}



function direcionamentoDePagina() {
    contagemRegressiva();

    setTimeout(function infoDirecionamento() {
        mostrarModal();


    }, 0);



    setTimeout(function infoDirecionamento() {
        fecharModal();
    }, 3300);


    setTimeout(function infoDirecionamento() {
        carregarFormulario();
    }, 3300);

}



function contagemRegressiva() {
    let contador = 3;
    const elementoContador = document.getElementById('contador');

    const intervalo = setInterval(() => {
        elementoContador.textContent = contador;
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            // Aqui você pode adicionar o código para executar após a contagem terminar
            console.log("Contagem encerrada!");
        }
    }, 1000); // A cada 1000 milissegundos (1 segundo)
}





