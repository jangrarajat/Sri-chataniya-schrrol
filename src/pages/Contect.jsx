import React, { useState } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "../api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (submitStatus) setSubmitStatus(null);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName?.trim()) newErrors.fullName = "Name is required";
    if (!formData.email?.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phoneNumber?.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message?.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ fullName: "", email: "", phoneNumber: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Phone Number", details: ["+91 9982451367", "+91 9983451367"], color: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: Mail, title: "Email Address", details: ["shrichaitanyakotputli@gmail.com", "kotputlibranchhead@srichaitanyacollege.net"], color: "bg-red-50", iconColor: "text-red-600" },
    { icon: MapPin, title: "Visit Us", details: ["Kotputli, Rajasthan", "Pin Code: 303108"], color: "bg-green-50", iconColor: "text-green-600" },
    { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"], color: "bg-purple-50", iconColor: "text-purple-600" },
  ];

  return (
    <Layout>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Get in Touch</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">We're here to help and answer any questions you might have.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className={`${info.color} p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}>
                <div className={`${info.iconColor} mb-3 md:mb-4`}><IconComponent className="w-8 h-8 md:w-10 md:h-10" /></div>
                <h3 className="font-bold text-gray-800 text-base md:text-lg mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (<p key={i} className="text-gray-600 text-sm md:text-xs">{detail}</p>))}
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-500 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 text-sm sm:text-base">Message sent successfully! We'll contact you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-700 text-sm sm:text-base">Please fill all required fields correctly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className={`w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${errors.fullName ? 'border-red-500' : ''}`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={`w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${errors.email ? 'border-red-500' : ''}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="9876543210" className={`w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none ${errors.phoneNumber ? 'border-red-500' : ''}`} />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none bg-white ${errors.subject ? 'border-red-500' : ''}`}>
                    <option value="">Select a subject</option>
                    <option value="Admission">Admission Inquiry</option>
                    <option value="Courses">Course Information</option>
                    <option value="Support">Technical Support</option>
                    <option value="Feedback">Feedback / Suggestion</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us how we can help you..." className={`w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 md:py-3.5 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 hover:shadow-lg"}`}>
                {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96">
              <iframe title="Location Map" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src="https://maps.google.com/maps?q=kotputli&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen loading="lazy" className="w-full h-full" />
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Quick Support</h3>
              <p className="text-gray-600 mb-5 text-sm md:text-base">Need immediate assistance? Call our helpline or send us an email.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700"><Phone className="w-5 h-5 text-red-600" /><span className="text-sm md:text-base">Toll Free: +91 9982451367</span></div>
                <div className="flex items-center gap-3 text-gray-700"><Mail className="w-5 h-5 text-red-600" /><span className="text-sm md:text-base">shrichaitanyakotputli@gmail.com</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;