function calcularVolume(raio: number, altura: number): number {

    let raioo: number = 5;
    let alturaa: number = 10;
    
    let volume: number = Math.PI * raio ** 2 * altura;
    let litros: number = volume / 1000;

    return Math.PI * raio ** 2 * altura;
}

console.log("O volume da lata é: " + calcularVolume(5, 10) + " litros");

export { calcularVolume };

