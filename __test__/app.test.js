const {validateGamerTag} = require('../src/services/validations');

describe("app test suites - validateGamerTag() ", () => {
    test("should return true because length = 8", () => {
        const result = validateGamerTag("ab//cd*bja$");
        expect(result).toBe(true);
    });
    test("should return false because length < 8", () => {
        const result = validateGamerTag("12345");
        expect(result).toBe(false);
    });
    test("should return false because doesn't have special char", () => {
        const result = validateGamerTag("azrtyuiodfghj");
        expect(result).toBe(false);
    });
});
