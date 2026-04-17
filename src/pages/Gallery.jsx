import React, { useState } from "react";
import Layout from "../components/Layout";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      category: "Academics",
      images: [
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", title: "Science Lab" },
        { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", title: "Computer Lab" },
        { url: "https://images.unsplash.com/photo-1497633762026-7f06120e7fd8", title: "Classroom" },
        { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", title: "Study" },
      ],
    },
    {
      category: "Sports",
      images: [
        { url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211", title: "Ground" },
        { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", title: "Basketball" },
        { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", title: "Sports Day" },
        { url: "https://images.unsplash.com/photo-1479885585556-5a9e8e6f9b5f", title: "Athletics" },
      ],
    },
  ];

  return (
    <Layout>

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h1 className="text-5xl font-bold">Gallery</h1>
        <p className="mt-2">Explore campus moments 📸</p>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-4 max-w-7xl mx-auto">

        {galleryImages.map((section, i) => (
          <div key={i} className="mb-12">

            <h2 className="text-2xl font-bold text-red-600 mb-6">
              {section.category}
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {section.images.map((img, j) => (
                <div
                  key={j}
                  onClick={() => setSelectedImage(img.url)}
                  className="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-xl"
                >
                  <img
                    src={img.url}
                    className="w-full h-60 object-cover hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>

          </div>
        ))}

      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white p-2 rounded-full"
            >
              <X />
            </button>

            <img src={selectedImage} className="w-full rounded-lg" />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-12 bg-yellow-300 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Visit Our Campus 🚀
        </h2>
        <a href="/contact" className="bg-red-600 text-white px-6 py-3 rounded">
          Contact Us
        </a>
      </section>

    </Layout>
  );
};

export default Gallery;