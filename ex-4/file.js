function convertiInEuro(dollari, tasso) {
    return dollari / tasso;
}

const euro = convertiInEuro(10, 1.01);
console.log(euro);