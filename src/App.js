import React from 'react';
import './App.css';
import { BookContextProvider } from './contexts/BookContext';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import BookList from './components/BookList';


function App() {
	return (
		<Router>
			<div className="App">
				<BookContextProvider>
					<Navbar />
					<BookList />
				</BookContextProvider>
			</div>
		</Router>
	);
}

export default App;
