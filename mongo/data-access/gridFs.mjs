import Mongoose from 'mongoose';
import fs from 'fs';

export async function upload(fileName) {
    const gridFs = new Mongoose.mongo.GridFSBucket(Mongoose.connection.db);
    
    await fs.createReadStream(`./${fileName}`)
        .pipe(gridFs.openUploadStream(fileName))
        .on('finish', () => {
            Mongoose.connection.close();
        })
}

export async function download(fileName) {
    const gridFs = new Mongoose.mongo.GridFSBucket(Mongoose.connection.db);
    
    await gridFs.openDownloadStreamByName(fileName)
    .pipe(fs.createWriteStream(`./${fileName}`))
    .on('finish', () => Mongoose.connection.close());
}

