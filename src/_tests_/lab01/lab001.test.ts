import { calcularPercentagemRapazes } from "../../lab01/lab01";
import { calcularPercentagemRaparigas } from "../../lab01/lab01";

describe("lab01", () => {
    test("calcularPercentagemRapazes", () => {
        //Arrange
        const nrapazes = 10;
        const nraparigas = 20;
        const expected = 0.3333333333333333;

        //Act
        const result = calcularPercentagemRapazes(nrapazes, nraparigas);

        //Assert
        expect(result).toBe(expected);
    });

    test("calcularPercentagemRaparigas", () => {
        //Arrange
        const nrapazes = 10;
        const nraparigas = 20;
        const expected = 0.6666666666666666;

        //Act
        const result = calcularPercentagemRaparigas(nrapazes, nraparigas);

        //Assert
        expect(result).toBe(expected);
    });
});