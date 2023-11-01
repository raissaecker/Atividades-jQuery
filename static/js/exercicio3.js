$(document).ready(function() {
    const countElement = $("#count");
    const incrementButton = $("#increment");
    const decrementButton = $("#decrement");

    let count = 0;

    // Aumenta o número do contador de 1 em 1
    incrementButton.click(function() {
        count++;
        countElement.text(count);
    });

    // Diminui o número do contador de 1 em 1
    decrementButton.click(function() {
        if (count > 0) {
            count--;
            countElement.text(count);
        }
    });
});
