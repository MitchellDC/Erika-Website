function Services() {
  return (
    <section>
      <div className="card">
        <h1>Our Services</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          {["Luxury Apartments", "Community Events", "24/7 Security", "Fitness Center"].map((service, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;