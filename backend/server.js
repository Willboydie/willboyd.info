require('dotenv').config();

const express = require('express');
const likesRoutes = require('./routes/likes');

const app = express();
const mongoose = require('mongoose');

// allow request bodies to be accessible (e.g enables the syntax req.body)
app.use(express.json());

// route all calls to the express app
app.use('/likes', likesRoutes);

// display a 404 page and give a 404 error for any non-existent address
app.use((req, res) => {
    res.status(404).json({ mssg: "Oops, 404. You're requesting something either non-existent or impossible."} );
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err)
    });

