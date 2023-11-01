$(document).ready(function () {
    $(".grid-item").click(function () {
        // Remove a classe "selected" de todas as divs
        $(".grid-item").removeClass("selected");

        // Adiciona a classe "selected" a div selecionada
        $(this).addClass("selected");

        // Atualiza o texto do parágrafo com o número do quadrado selecionado
        var selectedSquare = $(this).text();
        $("p").text("Quadrado selecionado: " + selectedSquare);
    });
});
