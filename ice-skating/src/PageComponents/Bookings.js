import React, { useState } from "react";

export default function Bookings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  // Sanitize user input to prevent basic XSS attacks
  const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: sanitizeInput(value), // Sanitize each input
    });
  };

  // Validate the form before submission
  const validateForm = () => {
    const { name, email, message } = formData;

    // Basic validation for empty fields and a simple email check
    if (!name || !email || !message) {
      setFormError("Please fill in all fields.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    setFormError(""); // Reset error if form is valid
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) return;

    // Construct mailto link for form submission
    const { name, email, message } = formData;
    const mailtoLink = `mailto:chantelle@mikedoe.anonaddy.com?subject=Booking Request&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink; // Open the default email client
  };

  return (
    <div>
      <div className="section-header">
        <h1>Booking Information</h1>
      </div>
      <p>
        Calendar Booking will be coming soon. For now, just say hi and let me
        know what sort of lessons you're interested in.
      </p>

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
