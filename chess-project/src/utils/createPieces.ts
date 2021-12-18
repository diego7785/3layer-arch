import Piece from "../models/piece";
import * as mongoose from 'mongoose';


export async function connect(): Promise<any> {
    return await mongoose.connect("mongodb://localhost:27017/chess-game");
}

export async function disconnect(): Promise<void> {
    return await mongoose.disconnect();
}

const pieces = [
    {
        name: "Tower",
        color: "White",
        position: [0,0],
        moves: ["F"]
    },
    {
        name: "Horse",
        color: "White",
        position: [0,1],
        moves: ["L"]
    },
    {
        name: "WBishop",
        color: "White",
        position: [0,2],
        moves: ["D"]
    },
    {
        name: "Queen",
        color: "White",
        position: [0,3],
        moves: ["F","D"]
    },
    {
        name: "King",
        color: "White",
        position: [0,4],
        moves: ["1F"]
    },
    {
        name: "BBishop",
        color: "White",
        position: [0,5],
        moves: ["D"]
    },
    {
        name: "Horse",
        color: "White",
        position: [0,6],
        moves: ["L"]
    },
    {
        name: "Tower",
        color: "White",
        position: [0,7],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,0],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,1],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,2],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,3],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,4],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,5],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,6],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1,7],
        moves: ["F"]
    },




    
    
    {
        name: "Tower",
        color: "Black",
        position: [7,0],
        moves: ["F"]
    },
    {
        name: "Horse",
        color: "Black",
        position: [7,1],
        moves: ["L"]
    },
    {
        name: "WBishop",
        color: "Black",
        position: [7,2],
        moves: ["D"]
    },
    {
        name: "Queen",
        color: "Black",
        position: [7,3],
        moves: ["F","D"]
    },
    {
        name: "King",
        color: "Black",
        position: [7,4],
        moves: ["1F"]
    },
    {
        name: "BBishop",
        color: "Black",
        position: [7,5],
        moves: ["D"]
    },
    {
        name: "Horse",
        color: "Black",
        position: [7,6],
        moves: ["L"]
    },
    {
        name: "Tower",
        color: "Black",
        position: [7,7],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,0],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,1],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,2],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,3],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,4],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,5],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,6],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6,7],
        moves: ["F"]
    },
]

async function createPieces(){
    await connect();
    for(const piece of pieces){
        const newPiece = new Piece(piece);
        await newPiece.save();
    }
    await disconnect();
}


(async () => await createPieces())();
