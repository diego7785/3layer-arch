import AppFactory from './AppFactory';
import config from './config';
import GameRouter from './routes/game';
import BoardPiecesRouter from './routes/boardPieces';

const PORT = config.port;
const HOST = config.host;

const app = new AppFactory();

app.useRoute('/api/games', new GameRouter().routes());
app.useRoute('/api/pieces', new BoardPiecesRouter().routes());

app.startServer(HOST, PORT);
