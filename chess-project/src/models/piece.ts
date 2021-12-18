//import Mongoose from 'mongoose';
import * as Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const PieceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {    
        type: String,
        required: true
    },
    position: {
        type: Array,
        required: true
    },
    moves: {
        type: Array,
        required: true
    }
});

export default Mongoose.model('Piece', PieceSchema);
