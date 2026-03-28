function Contact() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>Email: info@windsorplacect.com</p>
      <p>Phone: (123) 456-7890</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;