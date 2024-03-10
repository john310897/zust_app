import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import SummaryForm from './components/SummaryForm';
function App() {
	return (
		<div className="App">
			<h3>Simple Zustand Application</h3>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<UserForm />} />
					<Route path='/summary' element={<SummaryForm />} />
				</Routes>
			</BrowserRouter>

		</div>
	);
}

export default App;
