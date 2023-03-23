// INICIO (nota1: INTEIRO, nota2: INTEIRO, nota3: INTEIRO, 
// peso1: INTEIRO, peso2: INTEIRO, peso3: INTEIRO) 
// ED: mediaPesada REAL

// mediaPesada (nota1*peso1+ nota2*peso2+ nota3*peso3) /(peso1+peso2+peso3)
// RETORNA (mediaPesada)
// FIM

// b) 

function mediaPesada(nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let media: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)
    return media
}

console.log(mediaPesada(8, 10, 12, 0.4, 0.3, 0.3))

export { mediaPesada }

