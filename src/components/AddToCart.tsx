import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/courseSlice';

const AddToCart = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">$15.99</h2>
      <button
        className="bg-purple-600 text-white p-3 rounded-lg mt-4 w-full"
        onClick={() => dispatch(addToCart())}
      >
        Add to Cart
      </button>
      <button className="border border-purple-600 text-purple-600 p-3 rounded-lg mt-2 w-full">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCart;
