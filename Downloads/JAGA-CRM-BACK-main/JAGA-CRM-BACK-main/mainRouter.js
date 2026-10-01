import { Router } from 'express'
import supabase from './config/supabaseClient.js'
import routerCliente from './routes/clienteRouter.js'
import routerProjeto from './routes/projetoRouter.js'
import routerChamado from './routes/chamadoRouter.js'
import routerAgente from './routes/agenteRouter.js'

const router = Router()

router.use("/cliente", routerCliente)
router.use("/projeto", routerProjeto)
router.use("/chamado", routerChamado)
router.use("/agente", routerAgente)






export default router
