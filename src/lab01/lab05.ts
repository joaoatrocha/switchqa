function calcularHipotenusa(cateto1: number, cateto2: number): number {

    let hipotenusa: number;
    hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    return hipotenusa;
}


console.log(calcularHipotenusa(6, 9));

export { calcularHipotenusa };