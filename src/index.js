const express = require("express");
const Routes = require("./routes/routes");

require("../config/associations");

const app = express();
app.use(express.json());
app.use(Routes);


app.listen("8080", console.log("Servidor iniciado"));