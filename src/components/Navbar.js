import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <nav>
            <h1>Book Store</h1>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Total: { books.length }</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
