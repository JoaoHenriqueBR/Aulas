const express = require("express");
const connectDB = require("./config/config");

const Book = require("./models/book");
const validateTitle = require("./middlewares/validateTitle");

const app = express();

const bookRoutes = require('./routes/bookRoutes');
connectDB();
app.use(express.json());
app.use('/api', bookRoutes);

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro no servidor." });
})


app.listen(3000, () => console.log("Server running on port 3000"));