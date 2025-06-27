import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

interface IUsuario {
    id?: number;
    nome: string;
    email: string;
}


export class Usuario {
    static async CadastroUsuario(usuario: IUsuario): Promise<Usuario> {
        const novoUsuario = await prisma.usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email
            }
        });
    console.log(`Usuario ${usuario.nome} cadastrado com sucesso!`);
    return novoUsuario;
    }

    static async LoginUsuario(email: string): Promise<Usuario | null> {
        const usuario = await prisma.usuario.findUnique({
            where: {email},
        });

        return usuario;
    }
}