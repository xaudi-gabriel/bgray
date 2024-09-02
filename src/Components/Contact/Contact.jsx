import React from "react";
import "./Contact.css";
import send_message_icon from "../../assets/send-message-icon.png";
import call_icon from "../../assets/call-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_REACT_APP_EMAIL_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          We’d love to hear from you! Whether you have questions about our
          products, need support, or want to discuss your solar needs, please
          send us a message. Our team is here to assist you and will get back to
          you as soon as possible. Fill out the form below, and we’ll be in
          touch shortly!
        </p>
        <ul>
          <li>
            <img src={send_message_icon} alt="" />
            Contact@bgray.ph
          </li>
          <li>
            <img src={call_icon} alt="" />
            +63-9171234567
          </li>
          <li>
            <img src={location_icon} alt="" />
            Dasmariñas City, Cavite 4114
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name: </label>
          <input type="text" name="name" placeholder="Name" required />
          <label>Contact Number: </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone/mobile number"
            required
          />
          <label>Email: </label>
          <input type="tel" name="phone" placeholder="Email" required />
          <label>Your Message: </label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
