import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Little Stars</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <header className="header" id="home">
        <h1 id="header1">Welcome to Little Stars</h1>
        <p id="header2">Hi! We’re <b>Little Stars</b>, a home daycare dedicated to supporting families by providing high-quality childcare in a nurturing, compassionate environment. Our mission is to help every child reach key developmental milestones while building a strong foundation for lifelong learning.</p>
        <p>At Little Stars, we use a <b>Developmental Play-Based Learning</b> approach, engaging children in hands-on, age-appropriate activities that promote growth in all areas—social, emotional, cognitive, and physical.</p>
        <p>We are open <b>Monday through Friday, from 7:00 AM to 6:00 PM. Availability is limited</b>, so we encourage you to <b>contact us today</b> to learn more and schedule a tour!</p>
        <h2>Activities</h2>
        <div className="image-container">

          <img src="images/4.jpg"></img>
          <img src="images/14.jpg"></img>
          <img src="images/3.jpg"></img>
          <img src="images/13.jpg"></img>
          <img src="images/5.jpg"></img>

          <img src="images/12.jpg"></img>
          <img src="images/15.jpg"></img>
          <img src="images/8.jpg"></img>
          <img src="images/9.jpg"></img>
          <img src="images/10.jpg"></img>
          <img src="images/11.jpg"></img>
          <img src="images/7.jpg"></img>
          <img src="images/2.jpg"></img>
          <img src="images/6.jpg"></img>
          <img src="images/20.jpg"></img>
          <img src="images/16.jpg"></img>
          <img src="images/17.jpg"></img>
          <img src="images/18.jpg"></img>
          <img src="images/1.jpg"></img>
          <img src="images/34.jpg"></img>
          <img src="images/21.jpg"></img>
          <img src="images/22.jpg"></img>
          <img src="images/23.jpg"></img>
          <img src="images/24.jpg"></img>
          <img src="images/25.jpg"></img>
          <img src="images/26.jpg"></img>
          <img src="images/27.jpg"></img>
          <img src="images/28.jpg"></img>
          <img src="images/29.jpg"></img>
          <img src="images/30.jpg"></img>
          <img src="images/31.jpg"></img>
          <img src="images/32.jpg"></img>
          <img src="images/33.jpg"></img>
          

        </div>
      </header>

      <main className="middle" id="about">
        <h2>A Safe and Inspiring Space</h2>
        <p>Little Stars was designed to encourage curiosity and learning in a clean, safe, and welcoming home environment. For your convenience, we offer <b>driveway parking</b> to make drop-off and pick-up easy and stress-free.</p>

        <p>Our daycare features thoughtfully arranged spaces that support learning and play, including:</p>
        <ol>
          <li>A cozy <b>nap room</b> for restful breaks</li>
          <li>A colorful <b>art area</b> for creative expression</li>
          <li>A quiet <b>reading corner</b> to promote early literacy</li>
        </ol>
        <p>We are located in a <b>family-oriented neighborhood in Irvine,</b> just steps away from a local park, elementary school, and middle school. We’re also only a few blocks from convenient street parking and accessible freeways.</p>
        <h2>About the Provider</h2>
        <p>With over <b>five years of experience</b> in early childhood education, I am passionate about creating a loving and engaging environment where children feel safe, supported, and inspired to grow.

          I am certified in <b>First Aid, CPR, and Early Childhood Education,</b> and I bring a balanced approach that blends safety, education, and fun. My goal is to give children the <b>skills, confidence, and care</b> they need to thrive—today and in the future.</p>
      </main>

      <footer className="footer" id="contact">
        <h3>Contact Info</h3>
        <p>Email: littlestardc22@gmail.com</p>
        <p>Phone: +1 562 732 3766</p>
        <p>Address : 657 Hayes St, Irvine, CA 92620</p>
      </footer>
    </div>
  );
}

export default App;
