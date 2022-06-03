import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Provider from './constants/Provider';
import reportWebVitals from './reportWebVitals';
// import pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './components/NotFound';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import ProductInfo from './pages/Products/ProductInfo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="" element={<Home />} />
						<Route path="cart" element={<Cart />} />
						<Route path="products/:id" element={<ProductInfo />} />
						{/* NotFound */}
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
