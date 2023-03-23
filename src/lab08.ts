// Velocidade do relampango: 

export function velocidadeRelampago(distancia: number, tempo: number): number {
    const velocidadeSom: number = 340;
    const intervaloTempo: number = 10;
    
    const distancia2: number = velocidadeSom / intervaloTempo;
    
    console.log("" + distancia2 + "");

    return distancia / tempo;
}

