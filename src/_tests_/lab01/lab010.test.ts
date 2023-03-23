import { expression } from "../../lab010";

describe("Lab 01 - Exercício 01", () => {
    it("Deve retornar o valor da expressão", () => {
        const result = expression(3, 2);
        expect(result).toBe(9);
    });
});