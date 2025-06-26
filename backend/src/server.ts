import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API está rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})