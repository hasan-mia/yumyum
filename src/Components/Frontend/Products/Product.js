import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
	const {id, name, price, ratings, img}= product
	const reviewDetails = useNavigate();
	return (
		<div className="card rounded-2xl md:mx-2 md:mb-0 mt-5">
            <div className="card-images">
                <img src={img} alt="" className='rounded-full'/>
            </div>
            <div className="card-content flex md:justify-start justify-center">
                <h2 className="text-lg text-green-600 font-bold md:text-center text-left">{name}</h2>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-green-500 text-md font-semibold py-2 px-1">${price}</p>
                    <p>
                        {
							ratings === 5 ?
							<span>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
                            <span className='text-green-900 text-md ml-1 font-bold'>{ratings}</span>
							</span>
							:
							(ratings >= 4) && (ratings < 5) ?
							<span>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star-half-alt text-md font-semibold text-yellow-500'></i>
                            <span className='text-green-900 text-md ml-1 font-bold'>{ratings}</span>
							</span>
							:
							(ratings >= 3) && (ratings < 4) ?
							<span>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star-half-alt text-md font-semibold text-yellow-500'></i>
                            <span className='text-green-900 text-md ml-1 font-bold'>{ratings}</span>
							</span>
							:
							<span>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star text-md font-semibold text-yellow-500'></i>
							<i className='fas fa-star-half-alt text-md font-semibold text-yellow-500'></i>
                            <span className='text-green-900 text-md ml-1 font-bold'>{ratings}</span>
							</span>
						}
                    </p>
            </div>
            <div className="card-footer bg-yellow-200 hover:bg-green-700 text-center rounded">
                <button onClick={() => reviewDetails(`/review/${id}`)} className="py-2 w-100 text-green-600 hover:text-white font-bold uppercase">View Review <i className="fas fa-arrow-right"></i> </button>
            </div>
        </div>
	);
};

export default Product;