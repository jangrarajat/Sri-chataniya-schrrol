// src/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { X } from "lucide-react";
import { getAllImages } from "../api/api";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await getAllImages();
      if (response.success) {
        setImages(response.data);
        // Extract unique categories
        const uniqueCategories = ["All", ...new Set(response.data.map(img => img.category))];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterImagesByCategory = () => {
    if (selectedCategory === "All") {
      return images;
    }
    return images.filter(img => img.category === selectedCategory);
  };

  const filteredImages = filterImagesByCategory();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Explore campus moments, events, and success stories 📸
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img._id || index}
                onClick={() => setSelectedImage(img.imageUrl)}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{img.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{img.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {img.tags && img.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full rounded-lg max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Campus 🚀
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Experience the excellence firsthand. Schedule a campus tour today!
          </p>
          <a
            href="/admission"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;