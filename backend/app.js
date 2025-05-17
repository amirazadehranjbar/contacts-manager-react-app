require('dotenv').config();
const errorHandler = require('./handlers/errorHandler');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

// middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// routes
app.use("/", contactRoutes);

// error handler
app.use(errorHandler);

// run express server

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// mongo db connection
mongoose.connect(process.env.MONGO_DB_URL, {}).then(
    () => {
        console.log('MongoDB connected');
    }
).catch((err) => {
        console.log(err);
    }
);


