import React from 'react';
import iphone from './images/iphone.png';
import { BsCartPlusFill } from 'react-icons/bs';

function Home(props) {
  console.warn('home props', props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img src={iphone} alt='' />
        </div>
        <div className='text-wrapper item'>
          <span>i-Phone</span>
          <span> Price: $1000.00</span>
        </div>
        <div className='btn-wrapper item'>
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: 'iPhone 11' });
            }}
          >
            Add to Cart
          </button>
          <button
            className='btn-remove'
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
