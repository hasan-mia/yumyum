// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Header from './Components/Frontend/Header/Header';
import Home from './Components/Frontend/Pages/Home';
import Footer from './Components/Frontend/Footer/Footer';
import Dashboard from './Components/Frontend/Dashboard/Dashboard';
import Blogs from './Components/Frontend/Blogs/Blogs';
import About from './Components/Frontend/Pages/About';
import Reviews from './Components/Frontend/Reviews/Reviews';
import Error from './Components/Frontend/Error/Error';
import ProductDetails from './Components/Frontend/Products/ProductDetails';
import BlogDetails from './Components/Frontend/Blogs/BlogDetails';
import { createContext } from 'react';
import useReviews from './Hooks/useReviews';

export const productContext = createContext()

function App() {
	const [products] = useReviews();
  return (
     <productContext.Provider value={[products]}>
       <Header></Header>
       		<Routes>
				  <Route path='/' element={<Home></Home>}></Route>
				  <Route path='/reviews' element={<Reviews></Reviews>}></Route>
				  <Route path='/review/:id' element={<ProductDetails></ProductDetails>}></Route>
				  <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
				  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
				  <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
				  <Route path='/about' element={<About></About>}></Route>
				  <Route path='*' element={<Error></Error>}></Route>
			</Routes>
      	<Footer></Footer>
    </productContext.Provider>
  );
}

export default App;
