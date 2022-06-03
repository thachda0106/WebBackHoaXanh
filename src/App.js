import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

function App({ children }) {
	return (
		<div className="App">
			<Outlet />
		</div>
	);
}

export default App;
