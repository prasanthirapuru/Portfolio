import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs
      .sendForm(
        "service_p8587y1", // Your Gmail service ID
        "template_yzmlxcm",          // Your template ID
        form.current,
        "zuvSQ993Uxqb4xSCO" // Your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          alert("Oops! Something went wrong.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-heading">Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
