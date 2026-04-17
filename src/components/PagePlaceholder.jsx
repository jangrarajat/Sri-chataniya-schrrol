import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PagePlaceholder = ({ title, description }) => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">

        <div className="text-center px-4 max-w-2xl">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            {title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>

          {/* BOX */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border">
            <p className="text-gray-600 mb-3">
              🚧 This page is coming soon!
            </p>
            <p className="text-gray-500 text-sm">
              Explore other sections or contact us for more info.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/"
              className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2 justify-center"
            >
              Back to Home <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default PagePlaceholder;