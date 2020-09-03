import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [])

    // const [books, setBooks] = useState([
    //     { title: 'Bhagavat Geeta', author: 'Krishna' , id: 1 },
    //     { title: 'Garuda Puran', author: 'Hrishi', id: 2 },
    //     { title: 'Ramayana', author: 'Valmiki', id: 3 },
    //     { title: 'Aashtavarta Geeta', author: 'Ashtavarta', id: 4 },
    // ]);


    return(
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}