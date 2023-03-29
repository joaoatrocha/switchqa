// Calcular a distância percorrida pelo Zé 

export function distancia(tempo: number, velocidade: number): number {
    let distancia: number
    distancia = tempo * velocidade
    return distancia
}

console.log(distancia(1.0833, 10.4544))

