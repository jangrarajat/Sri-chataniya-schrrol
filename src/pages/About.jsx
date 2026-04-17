import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Heart, Eye, Target } from "lucide-react";

const About = () => {
  return (
    <Layout>

      {/* HERO */}
      <section className="py-12 bg-red-700 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Sri Chetanaya
        </h1>
        <p className="text-lg">Building Excellence, Shaping Futures</p>
      </section>

      {/* STORY */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Sri Chetanaya Educational Institutions was founded with a vision to provide world-class education.
            </p>
            <p className="text-gray-600">
              We focus on academic excellence and holistic development.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="bg-gray-100 py-12">
        <div className="grid md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto text-center">

          <div className="p-6 bg-white rounded shadow">
            <Eye size={40} className="mx-auto text-red-700" />
            <h3 className="text-xl font-bold mt-3">Vision</h3>
            <p className="text-gray-600">
              To be a globally recognized institution.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <Target size={40} className="mx-auto text-red-700" />
            <h3 className="text-xl font-bold mt-3">Mission</h3>
            <p className="text-gray-600">
              To develop responsible individuals.
            </p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <Heart size={40} className="mx-auto text-red-700" />
            <h3 className="text-xl font-bold mt-3">Values</h3>
            <p className="text-gray-600">
              Integrity, Excellence, Innovation.
            </p>
          </div>

        </div>
      </section>

      {/* FACULTY */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center text-red-700 mb-8">
          Our Faculty
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="text-center">
              <img
                src={`https://images.unsplash.com/photo-${1494623246 + item}?w=300`}
                className="rounded-lg mb-3"
              />
              <h3 className="font-bold">Faculty {item}</h3>
              <p className="text-gray-500 text-sm">Subject Expert</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-yellow-400 py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>29 Years</div>
          <div>25K+ Students</div>
          <div>500+ Faculty</div>
          <div>95% Result</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Join Our Community
        </h2>
        <Link
          to="/admission"
          className="bg-red-700 text-white px-6 py-3 rounded"
        >
          Apply Now
        </Link>
      </section>

    </Layout>
  );
};

export default About;