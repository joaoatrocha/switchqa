import { calcularAlturaEdificio } from "../../lab01/lab011";

describe("calcularAlturaEdificio", () => {	
    test("calcularAlturaEdificio(2, 9.8) = 19.6", () => {
        //Arrange 
        const tempoQueda = 2;
        const aceleracaoGravidade = 9.8;
        const expected = 19.6;
        //Act
        const result = calcularAlturaEdificio(tempoQueda, aceleracaoGravidade);
        //Assert
        expect(result).toBe(expected);
    });
})