import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Shared/Navigation/Navbar'
import Footer from './Shared/Navigation/Footer'
import Alert from './Shared/Misc/Alert'
import ScrollToTop from './Shared/Misc/ScrollToTop'
import Index from './Blog/Index'
import Create from './Blog/Create'
import Show from './Blog/Show'
import Edit from './Blog/Edit'

function App() {
	return (
		<Router>
			<Navbar />
			<Alert />
			<ScrollToTop />
			<Routes>
				<Route exact path='/' element={<Index />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/blogs/:id' element={<Show />}></Route>
				<Route path='/blogs/edit/:id' element={<Edit />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
