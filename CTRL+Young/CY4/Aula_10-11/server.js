const express = require("express");
const app = express();


const authRoutes = require('./routes/authRoutes');
const authMiddleware = require("./middlewares/authMiddleware");
const rolesMiddleware = require("./middlewares/rolesMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes);

app.get("/api/perfil", authMiddleware.tokenValidation, (req,res) => {
    res.json({ mensagem: `Bem-vindo, ${req.user.email}!` }); 
});

app.get("/api/admin", rolesMiddleware.authorize(['admin']), (_req, res) => {
    res.json({ mensagem: "Bem vindo, Admin!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

