function calcularVolume(raio: number, altura: number): number {

    let volume: number = Math.PI * raio ** 2 * altura;
    let litros: number = volume * 1000;

    return litros;
}

console.log(calcularVolume(5, 10));

export { calcularVolume };

