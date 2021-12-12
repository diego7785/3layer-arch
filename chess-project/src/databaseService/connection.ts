import Mongoose from "mongoose";

export async function connect(): Promise<typeof Mongoose> {
    return await Mongoose.connect("mongodb://localhost:27017/chess-game");
}

export async function disconnect(): Promise<void> {
    return await Mongoose.disconnect();
}