import React from 'react';
import useBlogs from '../../../Hooks/useBlogs';
import Blog from './Blog';

const Blogs = () => {
    const [blogs] = useBlogs()
    return (
        <section className="py-1 px-1">
            <div className="container-lg lg:px-28 pb-5">
				<div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
                    {
                        blogs.map(blog=><Blog
                        key={blog.id}
                        blog={blog}
                        ></Blog>)
                    }
                </div>
			</div>
		</section>
    );
};

export default Blogs;