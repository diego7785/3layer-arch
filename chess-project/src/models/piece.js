"use strict";
exports.__esModule = true;
//import Mongoose from 'mongoose';
var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;
var PieceSchema = new Schema({
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
exports["default"] = Mongoose.model('Piece', PieceSchema);
