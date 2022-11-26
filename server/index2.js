const express = require("express");
const morgan = require('morgan');
require("dotenv").config();
const path = require("path");
const cors = require('cors'); //avoid cors error

const cookieParser = require('cookie-parser')

const router = require('./router')
const app = express();

app.use(cors());  //avoid "cors" error
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
// cookieParser middleware
app.use(cookieParser())
require('./controller/DatabaseController').connect(process.env.MONGODB_URI)

const PORT = process.env.PORT || 6000;
app.use(morgan('combined'));

app.use("/api", router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
