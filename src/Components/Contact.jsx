import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3nb42lj", "template_97c9pgh", form.current, {
        publicKey: "0N0dgoV7nbdJNBKbn",
      })
      .then(
        () => {
          alert("Message sent 👍");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label className="name">Name</label>
        <input type="text" name="user_name" />
        <br></br>
        <br></br>

        <label className="email">Email</label>
        <input type="email" name="user_email" />
        <br></br>
        <br></br>

        <label className="message">Message</label>
        <textarea name="message" />
        <br></br>
        <input type="submit" value="Send" />
        <br></br>
      </form>
      <p>You can call /text me on +2547 48213109</p>
    </div>
  );
};
export default Contact;
