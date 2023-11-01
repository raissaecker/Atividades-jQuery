var cronometro;
        var segundos = 0;
        var minutos = 0;
        var horas = 0;
        var isPausado = false;

        function formatarTempo() {
            return (
                (horas < 10 ? "0" + horas : horas) + ":" +
                (minutos < 10 ? "0" + minutos : minutos) + ":" +
                (segundos < 10 ? "0" + segundos : segundos)
            );
        }

        function iniciarCronometro() {
            cronometro = setInterval(function () {
                segundos++;
                if (segundos == 60) {
                    segundos = 0;
                    minutos++;
                    if (minutos == 60) {
                        minutos = 0;
                        horas++;
                    }
                }
                $("#cronometro").text(formatarTempo());
            }, 1000);
        }

        // Inicia o cronometro
        $("#iniciar").click(function () {
            if (!cronometro) {
                iniciarCronometro();
            } else if (isPausado) {
                iniciarCronometro();
                isPausado = false;
            }
        });

        // Pausa o cronometro
        $("#pausar").click(function () {
            if (cronometro) {
                clearInterval(cronometro);
                isPausado = true;
            }
        });

        // Reinicia o cronometro
        $("#resetar").click(function () {
            clearInterval(cronometro);
            cronometro = null;
            segundos = 0;
            minutos = 0;
            horas = 0;
            $("#cronometro").text(formatarTempo());
        });