function inicializarMascote() {
    const balao = document.querySelector('.balao-fala');
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!Pronto para as aulas?";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde! Já revisou os trabalhos de hoje?";
    } else {
        saudacao = "Boa noite! Não esqueça de descansar.";
    }

    // Muda a fala quando o site carrega
    if (balao) {
        balao.innerText = saudacao;
    }
}

// Executa a função assim que o site abrir
window.onload = inicializarMascote;