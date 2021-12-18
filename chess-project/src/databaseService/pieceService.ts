import piece from "../models/piece";
export default class PiecesService {

    async getPieces(): Promise<any> {
        try{
            return await piece.find({});
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
    
    async getPiece(id: string): Promise<any> {
        try{
            return await piece.findById(id);
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
}

