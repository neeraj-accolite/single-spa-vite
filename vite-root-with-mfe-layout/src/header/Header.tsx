import React from 'react';
import './styles.css';

function Header() {
  return (
    <div id="header">
      <img className='logoImage' src="https://www.nutrien.com/themes/custom/nutrien/logo.svg?ver=1721186473"/>
      <div className='actionBar'>
        <nav>
          <ul id='menu'>
            <li><a id="menu" href="/profiles">Profiles</a></li>
            <li><a href="/address" id="menu">Address</a></li>
            <li><a href="/orders" id="menu">Orders</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;