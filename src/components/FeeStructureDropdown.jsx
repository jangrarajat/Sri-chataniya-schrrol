import React from "react";

const FeeStructureDropdown = () => {
  const feeStructure = [
    {
      category: "JEE COURSE (Main & Advance)",
      courses: [
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "2 Year",
          fee: "₹ 3,20,000/-",
          startDate: "26-Mar & 2-Apr",
        },
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "1 Year",
          fee: "₹ 1,75,000/-",
          startDate: "26-Mar & 2-Apr",
        },
        {
          class: "Class Hindi/English (11th to 12th moving student)",
          duration: "1 Year",
          fee: "₹ 1,75,000/-",
          startDate: "19-Mar & 26-Mar",
        },
        {
          class: "Dropper Hindi/English (12th pass)",
          duration: "1 Year",
          fee: "₹ 1,60,000/-",
          startDate: "09-Apr & 17-Apr",
        },
      ],
    },
    {
      category: "NEET COURSE",
      courses: [
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "2 Year",
          fee: "₹ 2,80,000/-",
          startDate: "26-Mar & 2-Apr",
        },
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "1 Year",
          fee: "₹ 1,51,000/-",
          startDate: "26-Mar",
        },
        {
          class: "Class Hindi/English (11th to 12th moving student)",
          duration: "1 Year",
          fee: "₹ 1,56,000/-",
          startDate: "19-Mar & 26-Mar",
        },
        {
          class: "Dropper Hindi/English (12th pass)",
          duration: "1 Year",
          fee: "₹ 1,40,000/-",
          startDate: "09-Apr & 17-Apr",
        },
      ],
    },
    {
      category: "FOUNDATION COURSE (Olympiads & Boards)",
      courses: [
        { class: "7th Class", duration: "1 Year", fee: "₹ 57,000/-", startDate: "26-Mar & 2-Apr" },
        { class: "8th Class", duration: "1 Year", fee: "₹ 61,000/-", startDate: "26-Mar & 2-Apr" },
        { class: "9th Class", duration: "1 Year", fee: "₹ 75,000/-", startDate: "26-Mar & 2-Apr" },
        { class: "10th Class", duration: "1 Year", fee: "₹ 78,000/-", startDate: "26-Mar & 2-Apr" },
      ],
    },
  ];

  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 top-full p-6 z-50">

      {/* TITLE */}
      <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center">
        Courses & Fee Detail (2025-26)
      </h3>

      {/* TABLES */}
      <div className="space-y-6">
        {feeStructure.map((section, idx) => (
          <div key={idx} className="overflow-x-auto">

            {/* HEADER */}
            <div className="bg-red-700 text-white font-semibold px-4 py-2 rounded-t-lg uppercase">
              {section.category}
            </div>

            {/* TABLE */}
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-yellow-300 text-black">
                  <th className="border p-2 text-left">Class</th>
                  <th className="border p-2 text-center">Duration</th>
                  <th className="border p-2 text-center">Fee</th>
                  <th className="border p-2 text-center">Start Date</th>
                </tr>
              </thead>

              <tbody>
                {section.courses.map((course, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="border p-2">{course.class}</td>
                    <td className="border p-2 text-center">{course.duration}</td>
                    <td className="border p-2 text-center text-blue-700 font-semibold">
                      {course.fee}
                    </td>
                    <td className="border p-2 text-center">{course.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ))}
      </div>

      {/* NOTE */}
      <div className="mt-5 p-3 bg-blue-50 border border-blue-300 rounded-lg text-xs">
        <b>Note:</b> Fees may change. Contact admission office for latest updates.
      </div>

    </div>
  );
};

export default FeeStructureDropdown;