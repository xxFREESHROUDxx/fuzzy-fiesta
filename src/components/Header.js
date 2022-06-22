import React from 'react';
import iphone from './images/iphone.png';
import { BsCartPlusFill } from 'react-icons/bs';

function Header(props) {
  console.warn('Header props', props);
  return (
    <div>
      <div className='add-to-cart'>
        <span className='cart-count'>{props.data.length}</span>
        <BsCartPlusFill color='red' fontSize='2em' />
      </div>
    </div>
  );
}

export default Header;
