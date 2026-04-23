// src/pages/Admission.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  User,
  Calendar,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  GraduationCap,
  Users,
  Home,
  CheckCircle,
  AlertCircle,
  Send,
  RotateCcw
} from "lucide-react";
import { submitAdmissionForm } from "../api/api";

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phoneNumber: "",
    currentClass: "",
    desiredCourse: "",
    previousSchoolName: "",
    lastExamPercentage: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
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

    if (!formData.fullName.trim()) newErrors.fullName = "Student name is required";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father's name is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.currentClass) newErrors.currentClass = "Please select current class";
    if (!formData.desiredCourse) newErrors.desiredCourse = "Please select desired course";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits";

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
      const submitData = {
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        currentClass: formData.currentClass,
        desiredCourse: formData.desiredCourse,
        previousSchoolName: formData.previousSchoolName || "",
        lastExamPercentage: formData.lastExamPercentage ? parseFloat(formData.lastExamPercentage) : 0,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      };
      
      const response = await submitAdmissionForm(submitData);
      console.log("Submission response:", response);
      
      setSubmitStatus('success');

      // Reset form on success
      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phoneNumber: "",
        currentClass: "",
        desiredCourse: "",
        previousSchoolName: "",
        lastExamPercentage: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });

      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      phoneNumber: "",
      currentClass: "",
      desiredCourse: "",
      previousSchoolName: "",
      lastExamPercentage: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const inputClasses = "w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-sm md:text-base bg-white";
  const errorInputClasses = "border-red-500 focus:ring-red-500";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <Layout>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Admission Open 2026-27
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Join Sri Chaitanya Educational Institutions and embark on your journey to success
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 max-w-5xl mx-auto">

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm sm:text-base">Application submitted successfully! Our admission counselor will contact you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-700 text-sm sm:text-base">Please fill all required fields correctly before submitting.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Admission Application Form</h2>
            <p className="text-red-100 text-sm sm:text-base mt-1">Please fill all the details carefully</p>
          </div>

          <div className="p-6 sm:p-8">

            {/* Student Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 border-red-200">
                <User className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Student Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Student Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" className={`${inputClasses} ${errors.fullName ? errorInputClasses : ""}`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Date of Birth <span className="text-red-500">*</span></label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={`${inputClasses} ${errors.dateOfBirth ? errorInputClasses : ""}`} />
                  {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Gender <span className="text-red-500">*</span></label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={`${inputClasses} ${errors.gender ? errorInputClasses : ""}`}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="student@example.com" className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="9876543210" className={`${inputClasses} ${errors.phoneNumber ? errorInputClasses : ""}`} />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>
            </div>

            {/* Parent Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 border-red-200">
                <Users className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Parent Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Father's Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" className={`${inputClasses} ${errors.fatherName ? errorInputClasses : ""}`} />
                  {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Mother's Name</label>
                  <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter mother's name" className={inputClasses} />
                </div>
              </div>
            </div>

            {/* Academic Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 border-red-200">
                <GraduationCap className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Academic Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Current Class <span className="text-red-500">*</span></label>
                  <select name="currentClass" value={formData.currentClass} onChange={handleChange} className={`${inputClasses} ${errors.currentClass ? errorInputClasses : ""}`}>
                    <option value="">Select Current Class</option>
                    <option value="9th">9th Standard</option>
                    <option value="10th">10th Standard</option>
                    <option value="11th">11th Standard</option>
                    <option value="12th">12th Standard</option>
                  </select>
                  {errors.currentClass && <p className="text-red-500 text-xs mt-1">{errors.currentClass}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Desired Course <span className="text-red-500">*</span></label>
                  <select name="desiredCourse" value={formData.desiredCourse} onChange={handleChange} className={`${inputClasses} ${errors.desiredCourse ? errorInputClasses : ""}`}>
                    <option value="">Select Desired Course</option>
                    <option value="JEE">JEE (IIT/JEE Main & Advanced)</option>
                    <option value="NEET">NEET (UG)</option>
                    <option value="Foundation">Foundation Course (8th-10th)</option>
                  </select>
                  {errors.desiredCourse && <p className="text-red-500 text-xs mt-1">{errors.desiredCourse}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Previous School Name</label>
                  <input type="text" name="previousSchoolName" value={formData.previousSchoolName} onChange={handleChange} placeholder="Enter school name" className={inputClasses} />
                </div>

                <div>
                  <label className={labelClasses}>Last Exam Percentage</label>
                  <input type="text" name="lastExamPercentage" value={formData.lastExamPercentage} onChange={handleChange} placeholder="e.g., 85.5" className={inputClasses} />
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 border-red-200">
                <Home className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">Address Details</h3>
              </div>

              <div>
                <label className={labelClasses}>Address <span className="text-red-500">*</span></label>
                <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter complete address" className={`${inputClasses} resize-none ${errors.address ? errorInputClasses : ""}`}></textarea>
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-5">
                <div>
                  <label className={labelClasses}>City <span className="text-red-500">*</span></label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" className={`${inputClasses} ${errors.city ? errorInputClasses : ""}`} />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className={labelClasses}>State <span className="text-red-500">*</span></label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter state" className={`${inputClasses} ${errors.state ? errorInputClasses : ""}`} />
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Pincode <span className="text-red-500">*</span></label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="6-digit pincode" maxLength="6" className={`${inputClasses} ${errors.pincode ? errorInputClasses : ""}`} />
                  {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
              <button type="submit" disabled={isSubmitting} className={`flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 hover:shadow-lg"}`}>
                {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Submitting...</> : <><Send className="w-5 h-5" /> Submit Application</>}
              </button>

              <button type="button" onClick={handleReset} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-300">
                <RotateCcw className="w-5 h-5" /> Reset Form
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              <span className="text-red-500">*</span> Required fields. We'll never share your information with third parties.
            </p>
          </div>
        </form>

        {/* Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full"><Phone className="w-5 h-5 text-blue-600" /></div>
              <div><p className="text-gray-600 text-sm">Need help with admission?</p><p className="font-bold text-gray-800">+91 9982451367, +91 9983451367</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full"><Mail className="w-5 h-5 text-green-600" /></div>
              <div><p className="text-gray-600 text-sm">Email us for queries</p><p className="font-bold text-gray-800">shrichaitanyakotputli@gmail.com</p></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;