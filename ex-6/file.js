function generaNumero() {
    return Math.floor(Math.random() * 6) + 1;
}

function tiraDado() {
    const risultato = generaNumero();
    alert("Hai ottenuto" + risultato)
}