import { Router } from "express"
import supabase from '../config/supabaseClient.js'

const routerChamado = Router()

routerChamado.post("/", async(req, res) => {
    const { data, error } = await supabase.from("chamado").insert(req.body)
    console.log(req.body)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(req.body);
    }
})

routerChamado.get("/", async (req, res) => {
    const { data, error } = await supabase.from("chamado").select()
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

routerChamado.get("/cliente/:cnpj", async (req, res) => {
    const { data, error } = await supabase.from("chamado").select().eq("cnpj_cliente", req.params.cnpj)
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

export default routerChamado