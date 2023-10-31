import express from "express"
import { Server } from "socket.io"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import viewRouter from "./router/view.router.js"
import realTimeRouter from "./router/realTime.router.js"

const app = express()
//? Configuración para recibir objetos json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//? CONFIGURACIÓN HANDLEBARS
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

const httpServer = app.listen(1010, () => console.log("Running Server  <(--..--)>"))
app.use("/", viewRouter)
app.use("/realtime", realTimeRouter)

const socketServer = new Server(httpServer)
