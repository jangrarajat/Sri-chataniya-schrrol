import React from "react";
import Layout from "../components/Layout";
import { Mail, Phone, Award } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Education",
      experience: "25 Years",
      email: "principal@srichetanaya.edu",
      phone: "+919982451367",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Ms. Priya Sharma",
      position: "Vice Principal",
      qualification: "M.Tech, B.Ed",
      experience: "18 Years",
      email: "vp@srichetanaya.edu",
      phone: "+919983451367",
      image: "https://images.unsplash.com/photo-1494623246518-330166167e60",
    },
    {
      name: "Mr. Arjun Verma",
      position: "Head - Science",
      qualification: "M.Sc Physics",
      experience: "15 Years",
      email: "science@srichetanaya.edu",
      phone: "+919984451367",
      image: "https://images.unsplash.com/photo-1507564157191-b8c137ec24a2",
    },
    {
      name: "Ms. Anjali Patel",
      position: "Head - Mathematics",
      qualification: "M.Sc Mathematics",
      experience: "14 Years",
      email: "math@srichetanaya.edu",
      phone: "+919985451367",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <Layout>

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h1 className="text-5xl font-bold">Our Team</h1>
        <p className="text-lg mt-2">
          Meet our expert educators 👨‍🏫
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="py-16 px-4 max-w-7xl mx-auto">

        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Dedicated teachers and mentors guiding students towards success.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition group overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-red-600">
                  {member.name}
                </h3>

                <p className="text-yellow-600 font-semibold mb-3">
                  {member.position}
                </p>

                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Award size={14} />
                    {member.qualification}
                  </div>

                  <p>
                    <b>Experience:</b> {member.experience}
                  </p>
                </div>

                {/* CONTACT */}
                <div className="border-t pt-3 space-y-1 text-sm">
                  <a href={`mailto:${member.email}`} className="flex gap-2 text-red-600">
                    <Mail size={14} /> {member.email}
                  </a>

                  <a href={`tel:${member.phone}`} className="flex gap-2 text-red-600">
                    <Phone size={14} /> {member.phone}
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-12 bg-yellow-300 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Join Our Team 🚀
        </h2>

        <a
          href="/career"
          className="bg-red-600 text-white px-6 py-3 rounded"
        >
          View Careers
        </a>
      </section>

    </Layout>
  );
};

export default Team;