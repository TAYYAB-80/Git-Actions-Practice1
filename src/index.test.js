const { sum, subtract, multiply, division } = require('./index')

test('SUM OF 2 & 3', () => {
    expect(sum(2, 3)).toBe(5)
})
test('Difference OF 5 & 3', () => {
    expect(subtract(5, 3)).toBe(2)
})
test('Multiply OF 5 & 3', () => {
    expect(multiply(5, 3)).toBe(15)
})
test('Division OF 6 & 3', () => {
    expect(division(6, 3)).toBe(2)
})