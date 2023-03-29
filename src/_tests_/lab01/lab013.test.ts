import { calculaDistanciaEntreDoisPontos } from "../../lab01/lab013";
describe("lab013", () => {
    it("Deve retornar a distância entre dois pontos", () => {
        const result = calculaDistanciaEntreDoisPontos(0, 0, 3, 4);
        expect(result).toBe(5);
    });
});