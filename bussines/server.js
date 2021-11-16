const express = require('express');
const cors = require('cors');
const router = express.Router();
//const Person = require('./models/Person.js');
const fetch = require('node-fetch');
const emailService = require('./email-service/index');
const imageService = require('./image-service/index');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

router.get('/', (req, res) => {
    fetch('http://localhost:5433/')
    .then(res => res.json())
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.get('/email', (req, res) => {
    res.json(emailService.sendEmail())
})

router.get('/image', (req, res) => {
    res.json(imageService.getImage())
})

app.use('/', router)
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})