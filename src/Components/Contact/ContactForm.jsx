import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const companyRegex = /^[A-Za-z0-9\s&.-]{2,}$/;

    if (!formData.fullName) return "Full Name is required";
    if (!nameRegex.test(formData.fullName))
      return "Full Name must be at least 3 letters and only alphabets";

    if (!formData.email) return "Email is required";
    if (!emailRegex.test(formData.email)) return "Invalid email format";

    if (!formData.phone) return "Phone number is required";
    if (!phoneRegex.test(formData.phone))
      return "Enter valid Indian phone number (10 digits)";

    if (formData.company && !companyRegex.test(formData.company))
      return "Company name must be at least 2 characters (letters, numbers, &.- allowed)";

    if (!formData.message) return "Message is required";
   

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus(error);
      return;
    }

    setStatus("Submitting...");

    const encodedData = new URLSearchParams();
    Object.keys(formData).forEach((key) =>
      encodedData.append(key, formData[key])
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyu7ZXnKoyOqcNFZ1XnHH2uzHxNvgL8-iNRDZQKfluqbxjq0twVi3XlqxIzIfXqN1nM/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodedData.toString(),
        }
      );

      if (response.ok) {
        setStatus("Submitted successfully ✅");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("Failed to submit ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error occurred while submitting ❌");
    }
  };

  return (
    <div className="contact-container" id="contactContainer">
      <p className='contact-container-tag'>Contact Us</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
        <p className="status-message">{status}</p>
      </form>

      <div className="contact-info">
        <p>📍 SNO41A/1/1 MANTRI RIVERA, BOPODI, Pune, 411003, MH</p>
        <p>📞 Mahesh: 7387471567 | Tushar: 7057718699</p>
        <p>📧 Mahesh@wonderboapl.com | Dtushar@wonderboapl.com</p>
        <p>🕒 Mon – Fri: 8:00 AM – 6:00 PM</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.283029096545!2d73.8274892!3d18.5604453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12dfabf4b3d%3A0x5d536b05b3f7a9e3!2sSNO41A%2F1%2F1%20MANTRI%20RIVERA%2C%20SOC%2C%20BOPODI%20BLD%20B%20FL%2010B%2C%20Khadki%2C%20Pune%2C%20Maharashtra%20411003!5e0!3m2!1sen!2sin!4v1694015106503!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
