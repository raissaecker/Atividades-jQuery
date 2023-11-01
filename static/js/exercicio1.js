$(document).ready(function() {
    const clicker = $("#clicker");
    const secret = $("#secret");

    clicker.click(function() {
        // Verifica o estado atual do parágrafo
        if (secret.is(":hidden")) {
            // Se estiver oculto, mostra o parágrafo e altera o texto do botão
            secret.show();
            clicker.text("Esconder");
        } else {
            // Se estiver visível, oculta o parágrafo e altera o texto do botão
            secret.hide();
            clicker.text("Mostrar");
        }
    });
});