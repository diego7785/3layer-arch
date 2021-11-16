const express = require('express');
const cors = require('cors');
const Person = require('./bdd');

const app = express();
const router = express.Router();
const PORT = 5433;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

router.get('/', (req, res) => {
    let bdd = new Person();

    res.json({msg: bdd.getAll()})
});

app.use('/', router);
app.listen(PORT, () => {
    console.log(`Database listening on port ${PORT}`);
});