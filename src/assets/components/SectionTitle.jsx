import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center mb-20 max-w-[736px] mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
      <p className="mt-2 text-gray-600 text-base">{subheading}</p>
    </div>
  );
};

export default SectionTitle;
