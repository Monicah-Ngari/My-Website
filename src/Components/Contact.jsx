import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact Me</h3>
      <form>
        <label>Name:</label> <br></br>
        <input />
        <label> Email:</label>
        <br></br>
        <input />
        <label> Message</label>
        <br></br>
        <input />
      </form>
    </div>
  );
};
export default Contact;
