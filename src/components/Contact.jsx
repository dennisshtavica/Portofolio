import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GetInTouch, GetInTouchImage } from "../assets/Icons";
import "../scss/layout/_contact.scss";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const lastRef = useRef(null);


  const handleChange = (event) => {
    setMessage(event.target.value);

    if (event.target.value.trim().length > 0) {
      console.log("✅ Input is not empty");
    } else {
      console.log("⛔️ Input is empty");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oscr3gr",
        "template_0zgah0y",
        form.current,
        "9aVj7-Tgvk92QkpJ_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    firstRef.current.value = "";
    secondRef.current.value = "";
    lastRef.current.value = "";
  };

  return (
    <div id="contact-me">
      <div className="lineBreak"></div>
      <div className="contact-container">
        <div className="left-contact">
          <GetInTouch />
          <form ref={form} onSubmit={sendEmail}>
            <input
              ref={firstRef}
              type="text"
              onChange={handleChange}
              name="user_name"
              placeholder="your name"
            />
            <input
              ref={secondRef}
              type="email"
              name="user_email"
              placeholder="your email"
            />
            <textarea ref={lastRef} name="message" placeholder="your message" />
            <button
              disabled={message.length === 0}
              className={message.length > 0 ? "pointer" : ""}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="right-contact">
          <GetInTouchImage />
        </div>
      </div>
    </div>
  );
};

export default Contact;
