import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>DayCare Child</h1>
        <p>Child care is a big investment, so choosing a center that meets your family’s needs is key. Your child will learn and thrive in our safe, clean environment—and you’ll get the support you need with nutritious meals provided and flexible scheduling. Our research-based curriculum offers daily age-appropriate activities that help children reach developmental milestones, and the earlier kids start here, the faster they reach them.</p>
      </header>

      <main className="middle">
        <h2>Gallery</h2>
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
      </footer>
    </div>
  );
}

export default App;
