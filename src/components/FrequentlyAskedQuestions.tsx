import React from 'react';

const FAQ = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="bg-white p-4 rounded-lg shadow-lg">
          <summary className="font-semibold">How long does it take to learn?</summary>
          <p className="mt-2 text-gray-600">The course takes about 56 hours and 28 minutes to complete.</p>
        </details>
        <details className="bg-white p-4 rounded-lg shadow-lg">
          <summary className="font-semibold">How much does Blender cost?</summary>
          <p className="mt-2 text-gray-600">Blender is free and open-source software.</p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
