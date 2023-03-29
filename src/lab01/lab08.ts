// Velocidade do relampango: 

export function velocidadeRelampago(distancia: number, tempo: number): number {
    let velocidade: number = distancia / tempo;
    return velocidade;
}

console.log(velocidadeRelampago(100, 0.1));
