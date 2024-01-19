import React from "react";
import Navbar from "./components/NaviganitonBar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import { useSelector } from "react-redux";
function App() {
	const { currentUser } = useSelector((state) => state.user);
	return (
		<Router>
			{currentUser && <Navbar />}
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
		</Router>
	);
}

export default App;
