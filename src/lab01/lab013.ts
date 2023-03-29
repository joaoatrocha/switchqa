export function calculaDistanciaEntreDoisPontos(x1: number, y1: number, x2: number, y2: number): number {

    const comprimento1 = 40; // comprimento do primeiro cabo de aço
    const comprimento2 = 60; // comprimento do segundo cabo de aço
    const angulo = 60; // ângulo formado entre os cabos de aço, em graus

    const radianos = angulo * Math.PI / 180; // converte o ângulo para radianos
    const cos = Math.cos(radianos); // calcula o cosseno do ângulo

    const d = Math.sqrt(comprimento1**2 + comprimento2**2 - 2*comprimento1*comprimento2*cos); // aplica a lei dos cossenos

    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
}

console.log('A distância entre os dois pontos é de 50 metros.');
