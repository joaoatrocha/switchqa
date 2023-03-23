import { distance } from "../../lab02/lab02_3";
describe("distance", () => {
    test("should return 0 when given same points", () => {
        // Arrange
        const x1 = 0;
        const y1 = 0;
        const x2 = 0;
        const y2 = 0;

        // Act
        const result = distance(x1, y1, x2, y2);

        // Assert
        expect(result).toBe(0);
    });

    test("should return expected result when given two different points", () => {
        // Arrange
        const x1 = 1;
        const y1 = 2;
        const x2 = 4;
        const y2 = 6;

        // Act
        const result = distance(x1, y1, x2, y2);

        // Assert
        expect(result).toBeCloseTo(5, 5);
    });
});
