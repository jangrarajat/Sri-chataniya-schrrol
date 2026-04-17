import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { BookOpen, Users, Trophy, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: "neet",
      title: "NEET",
      icon: <BookOpen size={40} />,
      description: "Comprehensive education for NEET preparation",
      features: [
        "Expert Faculty",
        "Mock Tests",
        "Online Classes",
        "Doubt Sessions",
      ],
    },
    {
      id: "jee",
      title: "IIT & JEE",
      icon: <Users size={40} />,
      description: "Focused preparation for IIT / JEE exams",
      features: [
        "Experienced Teachers",
        "Regular Tests",
        "Study Material",
        "Career Guidance",
      ],
    },
    {
      id: "foundation",
      title: "Foundation",
      icon: <Trophy size={40} />,
      description: "Early preparation for competitive exams",
      features: [
        "Concept Building",
        "Olympiad Prep",
        "Mentorship",
      ],
    },
    {
      id: "results",
      title: "Results",
      icon: <Award size={40} />,
      description: "Track record of student success",
      features: [
        "Top Results",
        "Scholarships",
        "Rank Holders",
      ],
    },
  ];

  return (
    <Layout>

      {/* HERO */}
      <section className="py-12 bg-yellow-400 text-center">
        <h1 className="text-4xl font-bold text-black">Our Courses</h1>
        <p className="text-gray-700">
          Explore our programs designed for success
        </p>
      </section>

      {/* COURSES */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border p-6 rounded shadow">
              <div className="text-yellow-400 mb-3">{course.icon}</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <ul className="mb-4 space-y-1">
                {course.features.map((f, i) => (
                  <li key={i} className="text-gray-600 text-sm">
                    • {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/admission"
                className="bg-red-700 text-white px-4 py-2 rounded"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Admission Steps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {["Register", "Test", "Interview", "Admission"].map((step, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="text-xl font-bold text-red-700">{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>

        <div className="space-y-3">
          <div className="border p-4 rounded">
            <h3 className="font-bold text-red-700">Eligibility?</h3>
            <p className="text-gray-600">Depends on course</p>
          </div>

          <div className="border p-4 rounded">
            <h3 className="font-bold text-red-700">Scholarship?</h3>
            <p className="text-gray-600">Yes available</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center bg-red-700 text-white">
        <h2 className="text-2xl font-bold mb-4">Start Now</h2>
        <Link
          to="/admission"
          className="bg-yellow-400 text-black px-6 py-2 rounded"
        >
          Apply Now
        </Link>
      </section>

    </Layout>
  );
};

export default Courses;