import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home.js';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';

import Navbar from './component/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/rooms/" element={<Rooms />}></Route>
				<Route path="/rooms/:id" element={<SingleRoom />}></Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
