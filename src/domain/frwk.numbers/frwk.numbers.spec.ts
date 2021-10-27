import { FrwkNumbers } from './frwk.numbers';

describe('Test domain frwk.numbers', () => {
    test('Números negativos', async () => {
        const testFrwkNumbers = new FrwkNumbers(-1);
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ error: 'O número informado deve ser positivo!' });
    });
    test('Números inválidos', async () => {
        const testFrwkNumbers = new FrwkNumbers(Number("a"));
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ error: 'Não é um número válido!' });
    });
    test('Números não inteiros', async () => {
        const testFrwkNumbers = new FrwkNumbers(1.5);
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ error: 'Não é um número inteiro!' });
    });
    test('Divisores de 1', async () => {
        const testFrwkNumbers = new FrwkNumbers(1);
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ divisors: [1], primes: [] });
    });
    test('Divisores de 2', async () => {
        const testFrwkNumbers = new FrwkNumbers(2);
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ divisors: [1, 2], primes: [2] });
    });
    test('Divisores de 45', async () => {
        const testFrwkNumbers = new FrwkNumbers(45);
        const result = await testFrwkNumbers.getDivisors();
        expect(result).toStrictEqual({ divisors: [1, 3, 5, 9, 15, 45], primes: [3, 5] });
    });
});
