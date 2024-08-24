import React from "react";

export default function Bookings({ textDivision }) {
  return (
    <div className="contact-form-wrapper">
      <h1 className={textDivision}>
        Calendar Booking will be coming soon. For now, just say hi and let me
        know what sort of lessons you're interested in, with preferred
        days/times. This form is a work in progress and is currently not secure.
        Please do not add any personal information in your first message using
        this form.
      </h1>
      <form
        action="mailto:chantelle@mikedoe.anonaddy.com"
        method="POST"
        encType="multipart/form-data"
        className="contact-form"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
