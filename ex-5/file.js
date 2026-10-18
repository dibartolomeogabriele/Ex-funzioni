function calcolaMedia(voto1, voto2, voto3) {
    return (voto1, voto2, voto3) / 3;
}

function valoreMedia(media) {
    return (media >= 6)
}

const media = calcolaMedia(7, 8, 5);
const promosso = valoreMedia(media);

if (promosso == true) {
    console.log("La media è" + media + "ed è sufficiente");
} else {
    console.log("La media è" + media + "ed è insufficiente")
}
