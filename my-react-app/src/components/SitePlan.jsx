function SitePlan() {
  return (
    <section>
      <div className="card">
        <h1>Project Overview</h1>

        <div style={{ marginTop: '1.5rem' }}>
          <h3>Built with Intention. Designed to Endure.</h3>
          <p>
            A 67-home townhouse community positioned in the scenic hills of Seymour — where structural integrity,
            modern design, and attainable value converge.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div
            style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#f3f4f6',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <p>Site Map Image</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4>Community Overview</h4>
          <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <li><strong>Setting:</strong> Elevated, wooded, and serene</li>
            <li><strong>Architecture:</strong> Clean, modern lines with timeless exterior detailing</li>
            <li><strong>Amenities:</strong> Professionally maintained grounds, private roadways, and dedicated pickleball courts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SitePlan;