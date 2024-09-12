function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const seletorServicos = document.getElementById('seletorServicos').value;
    const descricaoServico = document.getElementById('descricaoServico').value;
    

    const mensagem = `*Nome:* ${nome}\n *Cidade:* ${cidade}\n *Bairro:* ${bairro}\n *CEP:* ${cep}\n *Rua:* ${rua}\n *Número Residência:* ${numero}\n *Serviço pedido:* ${seletorServicos}\n *Descrição do problema a ser resolvido:* ${descricaoServico}`;
    const numeroWhatsApp = '+5511998729249'; // Substitua pelo número desejado
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url);
}
