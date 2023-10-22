import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Shared/Navigation/Navbar'
import Footer from './Shared/Navigation/Footer'
import Alert from './Shared/Misc/Alert'
import ScrollToTop from './Shared/Misc/ScrollToTop'
import Index from './Blog/Index'
import Create from './Blog/Create'
import Show from './Blog/Show'
import Edit from './Blog/Edit'
import NotFound from './NotFound'
import Home from './Home'
import GithubCorner from './Shared/Misc/GithubCorner'

function App() {
	return (
		<Router>
			<Navbar />
			<Alert />
			<ScrollToTop />
			<GithubCorner />
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
				<Route exact path='/blogs' element={<Index />}></Route>
				<Route path='/create' element={<Create />}></Route>
				<Route path='/blogs/:id' element={<Show />}></Route>
				<Route path='/blogs/edit/:id' element={<Edit />}></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
