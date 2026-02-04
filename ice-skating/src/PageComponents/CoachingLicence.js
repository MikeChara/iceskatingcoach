export default function CoachingLicence({ Licence }) {
  return (
    <>
      <div className="section-header">
        <h1>British Ice Skating Licence</h1>
      </div>
      <p>
        One of the most important means to prove legitimacy is to be
        professionally qualified by an authority. In the UK, this is done by
        British Ice Skating. These licences expire quickly, so you'll find me at
        the annual coaches convention where I am assessed, measured, and
        verified as a quality coach. We adhere to a strict code of conduct which
        can be read{" "}
        <a
          href="https://www.iceskating.org.uk/_files/ugd/edc78b_417696823faf474bb39b6cef3351dfe2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="A link to a document from the ice skating organisational website that describes the code of conduct for coaches"
        >
          here.
        </a>
      </p>
      <p>
        <a
          href="https://www.iceskating.org.uk/coaches"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="A link to the ice skating organisational website"
        >
          Further reading on ice skating coaches can be found here.
        </a>
        <p></p>
        <p>And you can use the QR code below too, if you like.</p>
        <img
          className="licence"
          src={Licence}
          alt="Chantelle coaching licence"
        />
      </p>
    </>
  );
}
