function HomeModels() {
  const models = [
    { title: "3 Bedroom 2.5 Bath", size: "2,089 Sq Ft", price: "$484,900" },
    { title: "2 Bedroom 2.5 Bath", size: "1,965 Sq Ft", price: "$474,900" }
  ];

  return (
    <section className="models-container">
      <h1>Home Models</h1>
      <p>Each residence reflects intentional planning and structural integrity.</p>
      
      <div className="features-grid">
        <ul>
          <li>Open-concept living layouts</li>
          <li>Contemporary kitchens with granite and stainless steel</li>
          <li>Energy-efficient systems and modern insulation</li>
          <li>One-car garage with driveway parking</li>
        </ul>
      </div>

      <div className="models-display">
        {models.map((model, index) => (
          <div key={index} className="model-card">
            {/* Placeholder for model image */}
            <div style={{width: '100%', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p>Model {index + 1} Image</p>
            </div>
            <h3>{model.title}</h3>
            <p>{model.size}</p>
            <p><strong>Price from: {model.price}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeModels;