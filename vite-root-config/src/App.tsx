import React from 'react';
import './App.css';

function App() {
  return (
    <div id="header">
      <nav>
        <ul id='menu'>
          <li><a id="menu" href="/profile">Profile</a></li>
          <li><a href="/address" id="menu">Address</a></li>
          <li><a href="/orders" id="menu">Orders</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default App;