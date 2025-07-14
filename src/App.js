import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 id="header1">Bright Beginnings</h1>
        <p id="header2">Choosing the right daycare is a big decision. Here, we offer a welcoming space where your little ones feel loved and supported every day. With a curriculum grounded in early childhood education best practices, we help build confidence, creativity, and social skills in a safe, clean, and fun setting.</p>
      </header>

      <main className="middle">
        <h2>Events</h2>
        <div className="image-container">
          <img src="https://www.fundemoniumtoys.com/wp-content/uploads/2024/02/2-2-1-980x551.png" alt="Sample 1" />
          <img src="/2.jpg" alt="Sample 2" />
          <img src="https://npr.brightspotcdn.com/dims4/default/4f4b652/2147483647/strip/true/crop/4032x3024+0+0/resize/1760x1320!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwesa%2Ffiles%2F201808%2FIMG_20180824_095104.jpg" alt="Sample 3" />
        </div>
      </main>

      <footer className="footer">
        <h3>Contact Info</h3>
        <p>Email: example@email.com</p>
        <p>Phone: +1 234 567 8901</p>
        <p>Address : 659 Hayes st, Irvine, CA 92620</p>
      </footer>
    </div>
  );
}

export default App;
