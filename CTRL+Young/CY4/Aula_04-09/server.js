const express = require("express");
const connectDB = require("./config/config");

const Book = require("./models/book");
const validateTitle = require("./middlewares/validateTitle");

const app = express();

const bookRoutes = require('./routes/bookRoutes');
connectDB();
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use('/api', bookRoutes);

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Ocorreu um erro no servidor." });
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log("Server running on port 3000"));