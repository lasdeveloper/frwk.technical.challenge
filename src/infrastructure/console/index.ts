import readlineSync = require('readline-sync');
import { ConsoleController } from '@controllers/console.controller';

export class FrwkConsole {
    async main(): Promise<void> {
        let endConsole = false;
        do {
            const inputConsole: number = Number(readlineSync.question('\nDigite um número: '));

            let result: any = await ConsoleController.fetch(inputConsole);

            if (!result.hasOwnProperty('error')) {
                console.log(`\n\tNúmero de entrada..: ${inputConsole}`);
                console.log(`\tNúmeros divisores..: ${result.divisors.join(" ")}`);
                console.log(`\tDivisores primos...: ${result.primes.join(" ")}`);
            } else {
                console.log(`\n\tErro: ${result.error}`);
            }

            const optionConsole: string = readlineSync.question('\nDeseja decompor outro número? (S/N) ');

            if (optionConsole.toUpperCase() === 'N')
                endConsole = true;

        } while (!endConsole);
    }
}
const prompt = new FrwkConsole();
prompt.main();