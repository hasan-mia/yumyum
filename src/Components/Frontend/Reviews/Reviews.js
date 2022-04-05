import React from 'react';
import useReviews from '../../../Hooks/useReviews';
import Review from './Review';

const Reviews = () => {
  const [reviews] = useReviews();
  return (
      <section className="py-1 lg:px-0 px-2">
            <div className="container-lg lg:px-28 pb-5">  
              <div className="cutomers-review">
                  <div className = "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">  
                    {
                      reviews.map(review=> <Review
                      key={review.id}
                      review={review}
                      ></Review>)
                    }
                  </div>
              </div>
            </div>
      </section>
  );
};

export default Reviews;