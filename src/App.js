import React, { useState } from "react";
import "./App.css";

function App() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (img) => setLightboxImg(img);
  const closeLightbox = () => setLightboxImg(null);

  // Images for "A Safe and Inspiring Space"
  const aboutImages = [
    "4.jpg",
    "14.jpg",
    "3.jpg",
    "13.jpg",
    "15.jpg",
    "12.jpg"
  ];

  // Meaningful alt texts for about images:
  const aboutAltTexts = [
    "Nap room",
    "Art area",
    "Reading corner",
    "Play area",
    "Outdoor space",
    "Learning zone"
  ];

  // Gallery images excluding the aboutImages
  const galleryImages = [
    "1.jpg", "2.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.jpg", "11.jpg", "16.jpg", "17.jpg", "18.jpg",
    "20.jpg", "21.jpg", "22.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg",
    "32.jpg", "33.jpg", "34.jpg"
  ];

  // Simple alt text for gallery images (just numbers)
  const galleryAltTexts = galleryImages.map(
    (img, i) => `Activity ${i + 1}`
  );

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Little Stars Daycare</div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#gallery" className="nav-link">Gallery</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <header className="hero" id="home">
        <div className="hero-text">
          <h1>Welcome to Little Stars Daycare</h1>
          <p>
            Hi! We’re <strong>Little Stars</strong>, a home daycare dedicated to supporting families by providing high-quality childcare in a nurturing, compassionate environment. Our mission is to help every child reach key developmental milestones while building a strong foundation for lifelong learning.
          </p>
          <p>
            At Little Stars, we use a <strong>Developmental Play-Based Learning</strong> approach, engaging children in hands-on, age-appropriate activities that promote growth in all areas—social, emotional, cognitive, and physical.
          </p>
          <p>
            We are open <strong>Monday through Friday, from 7:00 AM to 6:00 PM.</strong> Availability is limited, so we encourage you to <strong>contact us today</strong> to learn more and schedule a tour!
          </p>
        </div>
      </header>

      <section className="about-section" id="about">
        <h2>A Safe and Inspiring Space</h2>
        <p>
          Little Stars was designed to encourage curiosity and learning in a clean, safe, and welcoming home environment. For your convenience, we offer <strong>driveway parking</strong> to make drop-off and pick-up easy and stress-free.
        </p>
        <p>Our daycare features thoughtfully arranged spaces that support learning and play, including:</p>
        <ul>
          <li>A cozy <strong>nap room</strong> for restful breaks</li>
          <li>A colorful <strong>art area</strong> for creative expression</li>
          <li>A quiet <strong>reading corner</strong> to promote early literacy</li>
        </ul>
        <p>
          We are located in a <strong>family-oriented neighborhood in Irvine,</strong> just steps away from a local park, elementary school, and middle school. We’re also only a few blocks from convenient street parking and accessible freeways.
        </p>

        <div className="about-images">
          {aboutImages.map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={aboutAltTexts[i] || `Little Stars photo ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <h2>Our Activities</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={galleryAltTexts[i]}
              className="gallery-img"
              loading="lazy"
              onClick={() => openLightbox(`/images/${img}`)}
            />
          ))}
        </div>
      </section>

      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImg} alt="Enlarged view" />
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}

  <section className="about-section provider">
  <h2>About the Provider</h2>
  <div className="provider-info">
    <div className="provider-circle-img">
      <img src="/images/35.jpg" alt="Provider" loading="lazy" />
    </div>
    <div className="provider-text">
      <p>
        With over <strong>five years of experience</strong> in early childhood education, I am passionate about creating a loving and engaging environment where children feel safe, supported, and inspired to grow.
      </p>
      <p>
        I am certified in <strong>First Aid, CPR, and Early Childhood Education,</strong> and I bring a balanced approach that blends safety, education, and fun. My goal is to give children the <strong>skills, confidence, and care</strong> they need to thrive—today and in the future.
      </p>
    </div>
  </div>
</section>


      <section className="contact-section" id="contact">
        <h2>Contact Info</h2>
        <p>Email: <a href="mailto:littlestardc22@gmail.com">littlestardc22@gmail.com</a></p>
        <p>Phone: +1 562 732 3766, +1 909 568 6941</p>
        <p>Address: 657 Hayes St, Irvine, CA 92620</p>
      </section>

      <footer className="footer">
        <p>© 2025 Little Stars Daycare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
