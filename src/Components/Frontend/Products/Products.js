import React, { useContext } from 'react';
import { productContext } from '../../../App';
// import useReviews from '../../../Hooks/useReviews';
import Product from './Product';
import './Products.css';

const Products = () => {
  const [products] = useContext(productContext)
	return (
		<section className="py-1 lg:px-0 px-2">
        <div className="container-lg lg:px-28 pb-5">
			    <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1">
                    {
                      products.map(product => < Product
                      key={product.id}
                      product={product}
                      ></Product>)
                    }
                </div>
            </div>
      </section>
	);
};

export default Products;