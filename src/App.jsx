import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navigation/Navbar';
import Footer from './Shared/Navigation/Footer';
import Alert from './Shared/Misc/Alert';
import Index from './Blog/Index';
import Create from './Blog/Create';
import Show from './Blog/Show';

function App() {

	return (
		<Router>
			<Navbar />
			<Alert />
			<Routes>
				<Route path='/' element={<Index />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/blogs/:id' element={<Show />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
