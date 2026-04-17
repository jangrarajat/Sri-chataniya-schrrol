import React, { useState } from "react";
import Layout from "../components/Layout";

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    currentClass: "",
    desiredCourse: "",
    section: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    schoolName: "",
    percentage: "",
  });

  // FIXED (TS removed)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FIXED (TS removed)
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");

    setFormData({
      studentName: "",
      fatherName: "",
      motherName: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      currentClass: "",
      desiredCourse: "",
      section: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      schoolName: "",
      percentage: "",
    });
  };

  return (
    <Layout>

      {/* HERO */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h1 className="text-4xl font-bold">Admission Form</h1>
        <p>Join Sri Chetanaya Educational Institutions</p>
      </section>

      {/* FORM */}
      <section className="py-10 px-4 max-w-4xl mx-auto">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >

          {/* STUDENT */}
          <h2 className="text-xl font-bold mb-4 text-red-600">
            Student Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student Name" className="input" />
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" />

            <select name="gender" value={formData.gender} onChange={handleChange} className="input">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" />
          </div>

          {/* PARENTS */}
          <h2 className="text-xl font-bold mt-6 mb-4 text-red-600">
            Parent Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father Name" className="input" />
            <input name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother Name" className="input" />
          </div>

          {/* COURSE */}
          <h2 className="text-xl font-bold mt-6 mb-4 text-red-600">
            Academic Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <select name="currentClass" value={formData.currentClass} onChange={handleChange} className="input">
              <option value="">Select Class</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>

            <select name="desiredCourse" value={formData.desiredCourse} onChange={handleChange} className="input">
              <option value="">Select Course</option>
              <option>JEE</option>
              <option>NEET</option>
            </select>

            <input name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="School Name" className="input" />
            <input name="percentage" value={formData.percentage} onChange={handleChange} placeholder="Percentage" className="input" />
          </div>

          {/* ADDRESS */}
          <h2 className="text-xl font-bold mt-6 mb-4 text-red-600">
            Address
          </h2>

          <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="input" />

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="input" />
            <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="input" />
            <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="input" />
          </div>

          {/* BUTTON */}
          <div className="flex gap-4 mt-6">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Submit
            </button>

            <button type="reset" className="bg-gray-300 px-4 py-2 rounded">
              Reset
            </button>
          </div>

        </form>
      </section>

    </Layout>
  );
};

export default Admission;