require('dotenv').config()
const express = require('express');
const app = express();
const fileUpload=require('express-fileupload');
app.use(

    fileUpload({

        extended:true
    })
)
app.use(express.static(_dirname));