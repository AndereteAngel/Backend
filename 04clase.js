(function (run) {
    if (!run) return;

    const recuerdame = (recordatorio, segundos) => {
        const milisegundos = segundos * 1000;
        console.log("Estableciendo el recordatorio");
        setTimeout(() => {
            console.log(`Me pediste que te recordara: ${recordatorio}`);
        }, milisegundos);
    }

    recuerdame("debes entregar trabajo", 5);

})(false);



// setInterval //

(function (run) {
    if (!run) return;

    const cuentaRegresiva = (inicio) => {
        let contador = inicio;
        const intervalId = setInterval(() => {
            console.log(contador);
            if (contador <= 0) {
                console.log("lanzamiento");
                clearInterval(intervalId);
            }
            contador--;
        }, 1000);
    }

    cuentaRegresiva(5);

})(true);

// fs.Node //

//fs.sync //

