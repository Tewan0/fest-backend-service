const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user.route');
const festRoute = require('./routes/fest.route');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
app.use('/fest', festRoute);
app.use('/images/users', express.static('images/users'));
app.use('/images/fests', express.static('images/fests'));

app.get('/', (request, response) => {
    response.json({
        message: "Hello, welcome to server....."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})