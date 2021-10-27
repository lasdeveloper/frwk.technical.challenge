import { ApiNumbers } from '@application/usecase/api.numbers/api.numbers';
import { ReturnFrwkNumbers } from '@domain/types/ReturnFrwkNumbers';
import { FrwkError } from "@domain/types/FrwkError";

export class ApiController {

    private constructor () { }

    static async fetch(numbers: Array<number>): Promise<ReturnFrwkNumbers | FrwkError> {
        const caseApiNumbers = new ApiNumbers();
        return await caseApiNumbers.getDivisors(numbers);
    }
}
