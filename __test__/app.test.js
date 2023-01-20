const {validateGamerTag} = require('../src/services/validations');

describe("app test suites - validateGamerTag() ", () => {
    test("should return true because length = 8", () => {
        const result = validateGamerTag("12345678");
        expect(result).toBe(true);
    });
});
