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
        >
          here.
        </a>
      </p>
      <p>
        If you're interested, you can read more about the coaching licence
        <a
          href="https://www.iceskating.org.uk/coaches"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
        <img
          className="licence"
          src={Licence}
          alt="Chantelle coaching licence"
        />
      </p>
    </>
  );
}
