const express = require("express");
const Routes = require("./routes/routes");
const Cors = require("cors");
require("../config/associations");

const app = express();

app.use(express.json());
app.use(Cors())
app.use(Routes);


app.listen("8080", console.log("Servidor iniciado"));