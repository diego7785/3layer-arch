import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const GameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'N' // N, S, I, F (N - Not started, S - Started, I - In progress, F - Finished)) 
    },
    turn: {
        type: String,
        default: 'W'
    },
    check: {
        type: Boolean,
        default: false
    },
    checkMate: {
        type: Boolean,
        default: false
    }
});

export default Mongoose.model('Game', GameSchema);