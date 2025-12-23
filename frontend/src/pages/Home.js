import React from "react";

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to Varnika Art Café 🎨☕</h1>
      <p>
        Experience the perfect blend of <strong>creativity</strong> and
        <strong>coffee</strong>! At Varnika Art Café, enjoy our handcrafted
        beverages while exploring art workshops in painting, music, and singing.
      </p>

      <section className="intro-section">
        <h2>What We Offer</h2>
        <ul>
          <li>☕ Freshly brewed coffee and desserts</li>
          <li>🎵 Interactive workshops: painting, music, singing</li>
          <li>🖼️ A cozy art-filled ambiance</li>
        </ul>
      </section>

      <section className="cta">
        <p>Ready to explore your creativity?</p>
        <a href="/booking" className="btn">Book a Workshop</a>
      </section>
    </div>
  );
}

export default Home;