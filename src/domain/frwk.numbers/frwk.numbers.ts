import { ReturnFrwkNumbers } from '@domain/types/ReturnFrwkNumbers';
import { FrwkError  } from '@domain/types/FrwkError';

export class FrwkNumbers {
    private readonly frwkNumber: number;

    constructor(frmkNumber: number) {
        this.frwkNumber = frmkNumber;
    }

    async getDivisors(): Promise<ReturnFrwkNumbers | FrwkError> {
        
        if (Number.isNaN(this.frwkNumber)) {
            let nanError: FrwkError = { error: 'Não é um número válido!' };
            return nanError;
        }
        
        if (!Number.isInteger(this.frwkNumber)) {
            let notIsIntError: FrwkError = { error: 'Não é um número inteiro!' };
            return notIsIntError;
        }

        if (Math.sign(this.frwkNumber) === -1) {
            let negativeNumberError: FrwkError = { error: 'O número informado deve ser positivo!' };
            return negativeNumberError;
        }

        let result: ReturnFrwkNumbers = { divisors: [], primes: [] };
        for (let num = 1; num <= this.frwkNumber; num++) {
            if (this.frwkNumber % num === 0){
                result.divisors.push(num);
                if( this.isPrime(num) )
                    result.primes.push(num);
            }
        }
        return result;
    }
    
    private isPrime(num: number): boolean {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false
        return num > 1;
    }   
}
