import React from "react";
import "./index.css";

export default function Container() {
  return (
    <div className="contact">
      <div className="contact__title">Contact form</div>
      <form className="contact__form">
        <input
          className="contact__input"
          name="message"
          placeholder="Your message"
        />
        <button className="contact__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
