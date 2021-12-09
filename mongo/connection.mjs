import Mongoose from "mongoose";

export function connect(){
    return Mongoose.connect("mongodb://localhost:27017/books");
}

export function disconnect(){
    return Mongoose.disconnect();
}