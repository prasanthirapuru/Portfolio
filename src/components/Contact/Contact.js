import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact; // ✅ Default export
