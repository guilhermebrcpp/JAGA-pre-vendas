import { Router } from "express"
import supabase from '../config/supabaseClient.js'

const routerProjeto = Router()

routerProjeto.post("/", async(req, res) => {
    const { data, error } = await supabase.from("projeto").insert(req.body)
    console.log(req.body)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(req.body);
    }
})

routerProjeto.get("/", async (req, res) => {
    const { data, error } = await supabase.from("projeto").select()
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

routerProjeto.get("/cliente/:cnpj", async (req, res) => {
    const { data, error } = await supabase.from("projeto").select().eq("cnpj_cliente", req.params.cnpj)
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

routerProjeto.get("/agente/:id", async (req, res) => {
    const { data, error } = await supabase.from("projeto").select().eq("id_agente", req.params.id)
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

export default routerProjeto