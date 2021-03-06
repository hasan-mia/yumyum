import React, { useEffect, useState } from 'react';

const useBlogs = () => {
	const [blogs, setBlogs] = useState([])
	useEffect(()=>{
		fetch(`data/blogs.json`)
		.then(res=>res.json())
		.then(data => setBlogs(data))
	}, [])
	return [blogs, setBlogs];
};

export default useBlogs;