export default function About({ OnNavigate }) {
  return (
    <>
      <div className="section-header">
        <h1>Ice skating lessons in Slough</h1>
      </div>
      <p>
        Hello, I’m Chantelle — a seasoned performer and passionate ice skating
        coach based out of Slough Ice Arena.
      </p>
      <p>
        I've been on the ice for most of my life, many of them at professional
        ice shows and competitions both here in the UK and across Europe.
      </p>
      <p>
        The only thing that rivals the thrill of competing and performing?
        Seeing the success and growth of those I teach.
      </p>
      <button
        onClick={() => OnNavigate("coachinglicence")}
        className="link-button"
      >
        I'm a qualified coach and you can read about that here
      </button>
    </>
  );
}
