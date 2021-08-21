export default function BlockchainSection() {
  return (
    <>
      <section id="blockchain">
        <h2 className="blockchain-title">Hosted on the Blockchain</h2>
        <div className="blockchain-container">
          <p className="blockchain-text">
            This website is hosted on a decentralised blockchain network, the
            internet computer by DFINITY. It’s open, censorship-resistant and
            decentralised. The Internet Computer Protocol is the first public
            blockchain network able to serve at web-speed, grow with demand and
            is entirely self-governed. Check out DFINITY for more details.
          </p>
          <button
            type="button"
            className="dfinity-button btn btn-lg btn-outline-dark"
          >
            <a
              href="https://dfinity.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DFINITY
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
