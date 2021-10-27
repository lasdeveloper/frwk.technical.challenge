import { ReturnFrwkNumbers } from '@domain/types/ReturnFrwkNumbers';
import { FrwkError } from '@domain/types/FrwkError';
import { FrwkNumbers } from '@domain/frwk.numbers/frwk.numbers';

export class ApiNumbers {
    private maxNumbers: number = 3;

    constructor() { }

    async getDivisors(numbers: Array<number>): Promise<ReturnFrwkNumbers | FrwkError> {
        if (!Array.isArray(numbers)) {
            let notIsArray: FrwkError = { error: `Deve ser informado um array!` };
            return notIsArray;
        }

        if (numbers.length === 0) {
            let arrayIsEmpty: FrwkError = { error: `O array de números está vazio!` };
            return arrayIsEmpty;
        }

        if (numbers.length > this.maxNumbers) {
            let maxArrayNumbers: FrwkError = { error: `A quantidade de números não pode ser superior a ${this.maxNumbers}!` };
            return maxArrayNumbers;
        }

        let result: any = {};
        numbers.forEach(async (num: number) => {
            const objNumbers = new FrwkNumbers(Number(num));
            result[`${num}`] = await objNumbers.getDivisors();
        });

        return result;

    }
}
