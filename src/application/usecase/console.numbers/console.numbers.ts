import { FrwkNumbers } from '@domain/frwk.numbers/frwk.numbers';
import { ReturnFrwkNumbers } from '@domain/types/ReturnFrwkNumbers';
import { FrwkError } from '@domain/types/FrwkError';

export class ConsoleNumbers {

    constructor() { }

    async getDivisors(num: number): Promise<ReturnFrwkNumbers | FrwkError> {
        const consoleNumbers = new FrwkNumbers(num);
        return await consoleNumbers.getDivisors();
    }

}
