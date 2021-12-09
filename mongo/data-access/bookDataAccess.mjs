import Book from './book.mjs';

export async function save(bookToInsert){
    try {
        const bookModel = new Book(bookToInsert);
        return await bookModel.save();
    } catch(error){
        console.log(error);
    }
}

export async function read(id){
    try {
        return await Book.findById(id).lean();
    } catch(error){
        console.log(error);
    }
}

export async function update(id, book){
    try{
        return await Book.findByIdAndUpdate(id, book, {new: true});
    } catch(error){
        console.log(error);
    }
}

export async function remove(id){
    try{
        return await Book.findByIdAndRemove(id);
    } catch(error){
        console.log(error);
    }
}