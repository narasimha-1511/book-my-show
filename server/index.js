const express = require('express');
require('dotenv').config();
const dbConnect = require("./config/db.config");
const router = require('./routes/test');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);
app.get('/' , (req , res) => {
    res.json({
        message: 'Working good'
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});