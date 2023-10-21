import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navigation/Navbar';
import Footer from './Shared/Navigation/Footer';
import Alert from './Shared/Misc/Alert';
import Loading from './Shared/Misc/Loading';
import Index from './Blog/Index';
import Create from './Blog/Create';
import useFetch from './useFetch';

function App() {
	const {data, isPending, error } = useFetch('http://localhost:8000/blogs');

	return (
		<Router>
			<Navbar />
			<Alert />
			{isPending && <Loading />}
			{error && <p className='text-center mt-5'>{error}</p>}
			<Routes>
				<Route path='/' element={<Index blogs={data} />}></Route>
				<Route path='/create' element={<Create />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
