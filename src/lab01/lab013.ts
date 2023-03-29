export function distanciaOperarios (a: number, b: number, anguloa: number): number {
    let c2: number;
    let c: number;
    let radianos: number;
    radianos = anguloa * Math.PI / 180;
    c2 = a * a + b * b - 2 * a * b * Math.cos(radianos);
    c = Math.sqrt(c2);
    return c;
}

console.log(distanciaOperarios(60, 40, 60));




