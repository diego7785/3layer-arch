import express from 'express';
import * as gameService from '../databaseService/gameService';
import { connect, disconnect } from '../databaseService/connection';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await connect()
        res.status(200).send(await gameService.getGames());
        await disconnect();    
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

router.get('/:id', async(req, res) => {
    try {   
        await connect();
        const game = await gameService.getGame(req.params.id);
        if(game) {
            res.status(200).send(game);
        } else {
            res.status(404).send('Game not found');
        }
        await disconnect();
    } catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

router.post('/', async (req, res) => {
    try {
        await connect()
        res.status(200).send(await gameService.createGame(req.body.name));
        await disconnect();
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await connect();
        res.status(200).send(await gameService.deleteGame(req.params.id));
        await disconnect();
    } catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
}); 


export default router;