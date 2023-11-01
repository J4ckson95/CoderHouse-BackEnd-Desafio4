import { Router } from "express";
import fs from "fs"

const router = Router()
const path = "./src/data/DB.json"

router.get("/", (req, res) => {
    fs.promises.readFile(path, "utf-8")
        .then(data => {
            const dataFromFile = JSON.parse(data)
            res.render("realTimeProducts", { dataFromFile })
        })
})

export default router