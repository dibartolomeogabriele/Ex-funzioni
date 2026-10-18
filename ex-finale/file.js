function calcolaArea(base, altezza) {
    return (base * altezza);
}

function valoreArea() {
    const area = calcolaArea(12 * 7);
    alert("L'area è" + area + "metri quadrati");
}

function genNumero() {
    return Math.floor(Math.random() * 6) + 1;
}

function tiraDado() {
    const risultato = genNumero;
    alert("Hai ottenuto" + risultato);
}

function calcolaPrezzo(aliquota, imponibile) {
    return imponibile + (aliquota * imponibile / 100);
}

function iva() {
    const totale = calcolaPrezzo(22, 85);
    alert("Prezzo con Iva" + totale + "euro")
}