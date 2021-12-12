import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const boardPieceSchema = new Schema({
    position: {
        type: Array, 
        required: true
    },
    isAlive: {
        type: Boolean,
        default: true
    },
    isFirstMove: {
        type: Boolean,
        default: true
    },
    isPromoted: {
        type: Boolean,
        default: false
    },
    isCaptured: {
        type: Boolean,
        default: false
    },
    isPromotedTo: {
        type: String,
        default: false
    },
    Game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    Piece: {
        type: Schema.Types.ObjectId,
        ref: 'Piece'
    }
});

export default Mongoose.model('BoardPiece', boardPieceSchema);