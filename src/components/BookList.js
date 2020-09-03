import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookItem from './BookItem';

const BookList = () => {

    const { books } = useContext(BookContext);

    return books.length ? (
      <div className="book-list">
        <ul>
            { books.map(book => {
                return ( <BookItem key={book.id} book={book} />)
            }) }
        </ul>
      </div>
    ) : (
      <div className="empty">
        No books to read. Hello free time <span role="img" aria-label="emoji">😄</span>
      </div>
    );
}

export default BookList
