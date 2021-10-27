import express, { Application, json, Request, Response, urlencoded } from 'express';
import { ApiController } from '@controllers/api.controller';
import { config } from './config/default'

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', async (req: Request, res: Response) => {
    res.send('Framework Technical Challenge!!!');
});

app.get('/numbers', async (req: Request, res: Response) => {
    if (req.body.numbers) {
        const result: any = await ApiController.fetch(req.body.numbers);
        res.send(result);
    } else {
        res.send({ error: "Parâmetro numbers não informado!" });
    }
});

app.listen(config.port, config.host, () => {
    console.info(`[SERVER] Servidor está rodando em http://${config.host}:${config.port}...`);
});
