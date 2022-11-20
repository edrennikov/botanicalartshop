import React from 'react';
import logo from './Logo_BAS_InLine.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" /><br />
<span className="header">Botanical gifts for everyone.<br />
Inspired by nature 🌱</span><br /><br />
We are working to make the online shop here.<br />
<br />
But you can see and buy now our gifts on<br />
<a href="https://thebotanicalartshop.etsy.com/">https://thebotanicalartshop.etsy.com/</a><br />
<br />
Thank you!<br /><br />

<b>Contact</b><br />
Tallinn, Estonia, 10114<br />
Mail: <a href="mailto://artist@botanicalartshop.com">artist@botanicalartshop.com</a><br />
<br />
<span className="copyright">© 2022. Botanical Art Shop.</span>
    </div>
  );
}

export default App;