import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {Usuario} from '../models/Usuario'

export const CadastroUsuario = async (req: Request, res: Response) => {
    const {nome, email} = req.body;
     console.log(`Cadastrando usuário: ${nome}, email: ${email}`);

     if (!nome || !email){
        res.status(400).json({error: 'Nome e email são obrigatórios'});
        return;
     }

     try {
        const novoUsuario = await Usuario.CadastroUsuario({nome, email});
        res.status(201).json(novoUsuario);

     } catch (error){
        console.error("Erro ao cadastrar usuário:", error);
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        console.log(`Error: ${error} ${errorMessage}`);
        res.status(500).json({error: 'Erro ao cadastrar usuário'})
     }
}