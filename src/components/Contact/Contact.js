import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact; // ✅ Default export
