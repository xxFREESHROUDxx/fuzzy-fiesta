import React from 'react';
import iphone from './images/iphone.png';
import { BsCartPlusFill } from 'react-icons/bs';

function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <BsCartPlusFill color='red' fontSize='2em' />
      </div>
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
