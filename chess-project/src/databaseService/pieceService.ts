import piece from "../models/piece";

export async function getPieces(): Promise<any> {
    try{
        return await piece.find({});
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export async function getPiece(id: string): Promise<any> {
    try{
        return await piece.findById(id);
    } catch(err) {
        console.log(err);
        throw err;
    }
}