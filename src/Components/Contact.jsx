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
          console.log("Message sent 👍");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label className="name">Name</label>
        <input type="text" name="user_name" />
        <br></br>
        <label className="email">Email</label>
        <input type="email" name="user_email" />
        <br></br>
        <label className="message">Message</label>
        <textarea name="message" />
        <br></br>
        <input type="submit" value="Send" />
        <br></br>
      </form>
    </div>
  );
};
export default Contact;
