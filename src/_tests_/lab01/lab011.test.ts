import { calcularAlturaEdificio } from "../../lab01/lab011";

describe("calcularAlturaEdificio", () => {	
    it("Deve retornar a altura do edificio", () => {
        const result = calcularAlturaEdificio(2, 9.8);
        expect(result).toBe(19.6);
    });
});