import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = ({blog}) => {
	const {title, img, description} = blog
	// const blogDetails = useNavigate();
	return (
		<article className='blog lg:px-0 px-2'>
			<img src={img} alt="" className='blog-image'/>
			<div>
				<h2 className='font-semibold text-2xl'>{title}</h2>
				<p className='text-lg py-2 text-justify'> {description} </p>
			</div>
			{/* <button onClick={()=>blogDetails(`/blog/${id}`)} className='text-right text-lg font-semibold'>More...</button> */}
		</article>
	);
};

export default Blog;