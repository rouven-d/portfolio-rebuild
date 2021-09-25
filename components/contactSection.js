export default function ContactSection() {
  return (
    <>
      <section id="contact">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-container">
          <p className="contact-text">
            Interested in my work or just wanting to chat about web
            technologies, the Web 3.0 and much more? Feel free to reach out to
            me via Email or my social media channels. Looking forward to hearing
            from you!
          </p>
          <button
            type="button"
            className="contact-button btn btn-lg btn-outline-dark"
          >
            <a
              href="mailto:onions-farrier.0t@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
