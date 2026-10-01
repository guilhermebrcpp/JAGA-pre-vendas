import { Router } from 'express'
import supabase from '../config/supabaseClient.js'

const routerCliente = Router()

routerCliente.post("/", async(req, res) => {
    const { data, error } = await supabase.from("cliente").insert(req.body)
    console.log(req.body)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(req.body);
    }
})

routerCliente.get("/", async (req, res) => {
    const { data, error } = await supabase.from("cliente").select()
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

routerCliente.get("/:cnpj", async (req, res) => {
    const { data, error } = await supabase.from("cliente").select().eq("cnpj", req.params.cnpj)
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})



export default routerCliente

