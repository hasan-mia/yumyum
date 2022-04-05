import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../../Hooks/useReviews';
import ProductDetails from '../Products/ProductDetails';
import Products from '../Products/Products';
import Review from '../Reviews/Review';

const Home = () => {
	const [reviews] = useReviews();
	return (
		<>
			<section className="py-1 px-1">
				<div className="container-lg">
				<ProductDetails reviews={reviews}></ProductDetails>
				
				<div className="cutomers-review lg:px-28">
					<div className="title text-center my-10">
						<h2 className='text-4xl font-bold'>Customer Review <span className='text-4xl font-bold'>({reviews.length})</span></h2>
					</div>

					<div className = "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">  
						{
							reviews.slice(0,3).map(review=> <Review
							key={review.id}
							review={review}
							></Review>)
							}
					</div>
					<div className="text-center mt-10">
						<Link to='/reviews' className='text-center text-2xl font-bold text-white border-2 p-1 pb-2 rounded-md bg-green-700 hover:bg-yellow-600'>More Review <i className='fas fa-arrow-right'></i> </Link>
					</div>
				</div>
				</div>
      		</section>

			<Products></Products>
		</>
	);
};

export default Home;