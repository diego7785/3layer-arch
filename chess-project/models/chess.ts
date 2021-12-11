import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const ChessSchema = new Schema({
});

export default Mongoose.model('Chess', ChessSchema);