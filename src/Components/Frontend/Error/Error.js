import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../Assets/error.gif';
const Error = () => {
	return (
		<section className='error text-center pb-3'>
			<div className='flex justify-center'>
				<img src={error} alt="" className='w-50' />
			</div>
			<Link to='/' className='bg-green-800 text-white p-2'>Back <i className='fas fa-arrow-left'></i> Home</Link>
		</section>
	);
};

export default Error;