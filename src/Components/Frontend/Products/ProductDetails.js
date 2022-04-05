import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../App';

const ProductDetails = () => {
	const {id} = useParams();
	const [products] = useContext(productContext);
 	const product = products.find(p=>p.id === id);
	return (
		<section className="py-1 lg:px-0 px-2">
            <div className="container-lg lg:px-28 pb-5 md:text-left text-center">
				<div className = "grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 review-item">
					<div className="review-content">
						{product ? <h1 className='text-5xl font-bold text-green-600'> {product?.name}</h1>
						: <h1 className='text-5xl font-bold text-green-600'> Big McDonald's <span className='text-yellow-500'>Burger</span></h1>}

						{
							product? <p className='text-lg text-justify my-4'> {product?.description} </p>
							: <p className='text-lg text-justify my-4'>The Big Mac is a hamburger sold by the international fast food restaurant chain McDonald's. It was introduced in the Greater Pittsburgh area in 1967 and nationwide in 1968. It is one of the company's flagship products and signature dishes.
						The Big Mac was created by Jim Delligatti, an early Ray Kroc franchisee, who was operating several restaurants in the Pittsburgh area. It was invented in the kitchen of Delligatti's first McDonald's franchise, located on McKnight Road in suburban Ross.</p>
						}
						
						<button className='bg-green-700 hover:bg-green-500 px-2 pt-2 pb-3 text-white text-2xl font-bold rounded-md'>Live Demo</button>
					</div>
					<div className="review-image flex lg:justify-end justify-center md:mt-0 mt-2">
						{
							product ? <img src={product?.img} alt="" />
							: <img src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg" alt="" />
						}
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;