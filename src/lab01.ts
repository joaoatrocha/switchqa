// Dada a quantidade de rapazes e raparigas de uma turma, calcule a percentagem de rapazes e raparigas dessa turma. 

// Dúvidas
// •Qual o tamanho da turma?
// •Quantos rapazes?
// •Quantos raparigas?
// •Como se calcula uma percentagem?

// Abordagem
// •Perguntar a quantidade de rapazes e raparigas.
// •Total = rapazes + raparigas
// •Percentagem = valor parcial / total

// Pseudocodigo 
//     

function calcularPercentagemRapazes(nrapazes: number, nraparigas: number): number {
    let total: number;
    let percentagemRapazes: number;
    total = nrapazes + nraparigas;
    percentagemRapazes = nrapazes / total;

    return percentagemRapazes;

}

function calcularPercentagemRaparigas(nrapazes: number, nraparigas: number): number {
    let total: number;
    let percentagemRaparigas: number;
    total = nrapazes + nraparigas;
    percentagemRaparigas = nraparigas / total;

    return percentagemRaparigas;

}

console.log("Percentagem de rapazes: " + calcularPercentagemRapazes(10, 20));
console.log("Percentagem de raparigas: " + calcularPercentagemRaparigas(10, 20));

export { calcularPercentagemRapazes };
export { calcularPercentagemRaparigas };

//aksmdkamsdmka 