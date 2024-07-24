import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <form>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />

        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />

        <label for="message">Message:</label>
        <br />
        <textarea id="message" name="message"></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
