import express from 'express';

const app = express();
const PORT = 5000;
const HOST = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server listening on  http://${HOST}:${PORT}`);
});