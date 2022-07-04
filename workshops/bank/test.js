const { calculateBalance } = require("./bank");

const VALID_DATA = [
    { firstName: "Ziv", lastName: "Ventura", balance: "220" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "365" },
    { firstName: "Dor", lastName: "Shaked", balance: "12" }
]

const VALID_DATA_ZEROS = [
    { firstName: "Ziv", lastName: "Ventura", balance: "0" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "366" },
    { firstName: "Dor", lastName: "Shaked", balance: "0" }
]

const VALID_DATA_FLOATS = [
    { firstName: "Ziv", lastName: "Ventura", balance: "56.17" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "59.985" },
    { firstName: "Dor", lastName: "Shaked", balance: "13.175" }
]

const NEGATIVE_DATA = [
    { firstName: "Ziv", lastName: "Ventura", balance: "220" },
    { firstName: "Vlad", lastName: "Mystetskyi", balance: "-365" },
    { firstName: "Dor", lastName: "Shaked", balance: "12" }
]

test('Should return 0 when array is empty', () => {
    expect(calculateBalance([])).toBe("0.00");
});

test('Should return null when array is null', () => {
    expect(calculateBalance(null)).toBe(null);
});

test('Should return null when array is undefined', () => {
    expect(calculateBalance(undefined)).toBe(null);
});

test('Should return null when array is an object', () => {
    expect(calculateBalance({})).toBe(null);
});

test('Should return null when array is a number', () => {
    expect(calculateBalance(12)).toBe(null);
});

test('Should return null when array is a string', () => {
    expect(calculateBalance("what?")).toBe(null);
});

test('Should return null when array is corrupted', () => {
    expect(calculateBalance([...VALID_DATA, null])).toBe(null);
});

test('Should return null when object is corrupted', () => {
    expect(calculateBalance([...VALID_DATA, { corrupted: true }])).toBe(null);
});

test('Should return null when object balance is null', () => {
    expect(calculateBalance([...VALID_DATA, { balance: null }])).toBe(null);
});

test('Should return null when object balance is an empty string', () => {
    expect(calculateBalance([...VALID_DATA, { balance: "" }])).toBe(null);
});

test('return the correct results for valid data', () => {
    expect(calculateBalance(VALID_DATA)).toBe("199.00");
});

test('return the correct results for valid data of floats', () => {
    expect(calculateBalance(VALID_DATA_FLOATS)).toBe("43.11");
});

test('return the correct results for valid data of negatives', () => {
    expect(calculateBalance(NEGATIVE_DATA)).toBe("-44.33");
});

test('return the correct results for valid data containing zeros', () => {
    expect(calculateBalance(VALID_DATA_ZEROS)).toBe("122.00");
});

