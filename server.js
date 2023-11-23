const express = require('express');
const cors = require("cors");
require("dotenv").config();
require("./config/database.js")
const userRouter = require('./routers/userRouter.js')

const app = express();

const PORT = process.env.PORT || 5000;

app.set("port", PORT);

app.use(cors())
app.use(express.json())
app.use('/api', userRouter)

// app.get("/", (req, res) => {
//     res.send("servidor creado")
// });

app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto: " + app.get('port'))
})
