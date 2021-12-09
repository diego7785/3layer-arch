import { connect, disconnect } from './connection.mjs';
//import { save, read } from './models/bookDataAccess.mjs';
import { upload, download } from './data-access/gridFs.mjs';

await connect();
/*
const book = {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
};

//await save(book);
console.log(await read('61a931a82571e437a9707e09'))
disconnect();
*/

//upload('./hola.txt');
download('./README.md');



