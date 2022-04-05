import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Search from './Search';

const Header = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [searchText, setSearchText] = useState();
    const [searchResult, setSearchResult] = useState();
    // Search handler
    const searchHandler = e =>{
        setSearchText(e.target.value);
    }
     useEffect(() => {
        fetch('data/products.json')
            .then(res => res.json())
            .then(data => {
                const findProduct = data.filter(product => (product.name).toLowerCase().includes(searchText))
                setSearchResult(findProduct);
            })
    }, [searchText])
    console.log(searchResult);
	return (
        <>
		<header id="navbar" className="w-full">
            <nav className="relative flex flex-wrap items-center justify-between px-2 bg-yellow mb-1">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                        className="text-sm flex font-bold leading-relaxed items-center mr-4 py-2 whitespace-nowrap text-green-500"
                        to="/"
                        >
                        <img src="./logo.png" alt="" className='logo w-100'/>
                        </Link>
                        <button
                        className="text-green-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                        <i className="fas fa-bars"></i>
                        </button>
                    </div>
                <div className={"lg:flex flex-grow items-center" +(navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                    {/* Main Left Item */}
                    <ul className="flex flex-col lg:flex-row list-none lg:ms-auto">
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-700 hover:opacity-75"
                            to="/">
                            <i className="fas fa-home text-lg leading-lg text-green-700 opacity-75"></i><span className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-700 hover:opacity-75"
                            to="/reviews">
                            <i className="fab fa-empire text-lg leading-lg text-green-700 opacity-75"></i><span className="ml-2">Reviews</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-700 hover:opacity-75"
                            to="/dashboard">
                            <i className="fab fa-firstdraft text-lg leading-lg text-green-700 opacity-75"></i><span className="ml-2">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-700 hover:opacity-75"
                            to="/blogs">
                            <i className="fas fa-blog text-lg leading-lg text-green-700 opacity-75"></i><span className="ml-2">Blogs</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-700 hover:opacity-75"
                            to="/about">
                            <i className="fas fa-address-card text-lg leading-lg text-green-700 opacity-75"></i><span className="ml-2">About</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Search Form */}
                    <div className="flex flex-col lg:flex-row list-none lg:ml-auto search-bar">
                        <li className="nav-item search-item">
                           <input onChange={searchHandler} type="search" placeholder='search..' className='search lg:w-80 p-2'/>
                        </li>
                        <li className="nav-item">
                            <button> <i className="fas fa-search font-bold border-4 border-white text-yellow-400 bg-green-700 p-2"></i> </button>
                        </li>   
                    </div>

                </div>
                </div>
            </nav>

        </header>
        {/* Search Product */}
        {
            searchText ?
            <Search
                searchResult={searchResult}
            ></Search>
        : ''
        }
        </>
	);
};

export default Header;