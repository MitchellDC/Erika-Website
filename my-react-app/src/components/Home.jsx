import React from "react";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Ridge View Townhomes</h1>
          <p>Built with intention. Designed to endure.</p>
          <a href="/contact" className="btn">Request Information</a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section>
        <div className="overview-grid">
          <div>
            <h2>Modern Living in Seymour</h2>
            <p>
              A 67-home townhouse community offering a refined balance of craftsmanship,
              efficiency, and design. Ridge View is built for those who value both
              quality construction and timeless aesthetics.
            </p>
            <a href="/site" className="btn">View Site Plan</a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Interior"
            className="overview-image"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <h2 className="center">Features & Highlights</h2>
        <div className="features-grid">
          {[
            "Open Concept Layouts",
            "Granite Countertops",
            "Hardwood Flooring",
            "Energy Efficient Systems",
            "Walk-In Closets",
            "Finished Lower Levels"
          ].map((item, i) => (
            <div key={i} className="card">
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

 
    </>
  );
}

export default Home;
