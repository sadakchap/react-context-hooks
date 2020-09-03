import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const { addBook } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && author){
            addBook(title, author)
            setTitle(''); 
            setAuthor('');
        }else{

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="submit" value="Add Book" className="btn" />
            </form>
        </div>
    )
}

export default BookForm
