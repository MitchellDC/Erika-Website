function Contact() {
  return (
    <section>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }}
      >
        <div className="card">
          <h2>Contact Information</h2>
          <p>67 Townhomes | Seymour, CT</p>
          <p><strong>Erika Windisch</strong></p>
          <p><a href="tel:2035844733">203 584-4733</a></p>
          <p><a href="mailto:ewindisch@kw.com">ewindisch@kw.com</a></p>

          <div style={{ marginTop: '1.5rem' }}>
            <h4>Office Locations</h4>
            <p>
              <a href="https://maps.google.com/?q=276+Post+Road+W+Westport+CT+06880" target="_blank">
                Westport: 276 Post Road W
              </a>
            </p>
            <p>
              <a href="https://maps.google.com/?q=2777+Summer+St+Stamford+CT+06905" target="_blank">
                Stamford: 2777 Summer St #700
              </a>
            </p>
          </div>
        </div>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2>Send a Message</h2>

          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
