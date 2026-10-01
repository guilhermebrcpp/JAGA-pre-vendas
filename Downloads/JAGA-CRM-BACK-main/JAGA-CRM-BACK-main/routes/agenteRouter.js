import { Router } from "express"
import supabase from '../config/supabaseClient.js'

const routerAgente = Router()

export default routerAgente

routerAgente.post("/", async(req, res) => {
    const { data, error } = await supabase.from("agente").insert(req.body)
    console.log(req.body)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(req.body);
    }
})

routerAgente.get("/", async (req, res) => {
    const { data, error } = await supabase.from("agente").select()
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})

routerAgente.get("/:id", async (req, res) => {
    const { data, error } = await supabase.from("agente").select().eq("id", req.params.id)
    console.log(data)
    if(error){
        return res.status(400).json(error);
    }else{
        res.status(200).json(data);
    }
})