const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql')
const originOption ={
    origin: ["http://localhost:5173"],
};
app.use(cors(originOption));

const connection = mysql.createConnection ({
    host : "localhost",
    user : "root",
    password : "",
    database : "usuario"
});

connection.connect(function (error){
    if(error) {
        console.log("error connection");
    }else {
        console.log("sql connect 201 ")
    }
});


app.post("/user" , (req,res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
});

app.get("/empleados" , (req , res) => {
    res.json({ empleados: ["Xander Cagna" , "Wilson Bazan" , "Jorge Bazan"] });
});

// app.get("/api" , (req, res) => {
//     res.json({ fruits: ["apple" , "banana" , "orange"] });
// });

app.listen(8080, () => {
    console.log("Server this port 8080");
});