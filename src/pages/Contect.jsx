import React, { useState } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // TS remove → simple JS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>

      {/* HERO */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p>We’d love to hear from you</p>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-4 max-w-6xl mx-auto">

        {/* INFO */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="p-6 border rounded text-center">
            <Phone className="mx-auto mb-3 text-red-600" />
            <h3 className="font-bold">Phone</h3>
            <p>+91 9982451367</p>
          </div>

          <div className="p-6 border rounded text-center">
            <Mail className="mx-auto mb-3 text-red-600" />
            <h3 className="font-bold">Email</h3>
            <p>info@gmail.com</p>
          </div>

          <div className="p-6 border rounded text-center">
            <MapPin className="mx-auto mb-3 text-red-600" />
            <h3 className="font-bold">Address</h3>
            <p>Kotputli, Rajasthan</p>
          </div>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />

          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" />

          <select name="subject" value={formData.subject} onChange={handleChange} className="input">
            <option value="">Subject</option>
            <option>Admission</option>
            <option>Courses</option>
          </select>

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="input md:col-span-2" />

          <button className="bg-red-700 text-white py-2 rounded md:col-span-2">
            Send Message
          </button>

        </form>

      </section>

      {/* MAP */}
      <section className="h-80">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?q=kotputli&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </section>

    </Layout>
  );
};

export default Contact;