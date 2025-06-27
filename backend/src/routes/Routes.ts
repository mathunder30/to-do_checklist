import Express from 'express';
import {CadastroUsuario} from '../controllers/UsuarioControllers'

const router = Express.Router();

// Rota para cadastro de usuário
router.post('/usuarios/cadastro', CadastroUsuario)
export default router;