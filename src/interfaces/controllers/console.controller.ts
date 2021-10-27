import { ConsoleNumbers } from '@application/usecase/console.numbers/console.numbers';
import { ReturnFrwkNumbers } from '@domain/types/ReturnFrwkNumbers';
import { FrwkError } from "@domain/types/FrwkError";

export class ConsoleController {

    private constructor () { }

    static async fetch(num: number): Promise<ReturnFrwkNumbers | FrwkError> {
        const caseConsoleNumbers = new ConsoleNumbers();
        return await caseConsoleNumbers.getDivisors(num);
    }
}
