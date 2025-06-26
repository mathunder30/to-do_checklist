import express, {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
/*import {dotenv} from 'dotenv'*/

const app = express();
app.use(cors());