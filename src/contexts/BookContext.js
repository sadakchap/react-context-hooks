import React, { useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Bhagavat Geeta', author: 'Krishna' , id: 1 },
        { title: 'Garuda Puran', author: 'Hrishi', id: 2 },
        { title: 'Ramayana', author: 'Valmiki', id: 3 },
        { title: 'Aashtavarta Geeta', author: 'Ashtavarta', id: 4 },
    ]);

    const addBook = (title, author) => {
        setBooks([
            ...books,
            { title, author, id: uuidv4() }
        ]);
    }

    const removeBook = (id) => {
        setBooks(books.filter( book => book.id !== id))
    }

    return(
        <BookContext.Provider value={{ books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}