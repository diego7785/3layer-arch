import express from 'express';
import config from './config';
import gameRouter from './routes/game';
//import createPieces from './utils/createPieces';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = config.port;
const HOST = config.host;

app.use('/', gameRouter);

//(async() => await createPieces())();

app.listen(PORT, () => {
    console.log(`Server listening on  http://${HOST}:${PORT}`);
});