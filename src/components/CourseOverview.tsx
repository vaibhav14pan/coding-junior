import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CourseOverview = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-4">Learn the basics of Blender 3D with a project-based approach.</p>
      {/* Display the course image */}
      <img
        src={course.photo} // Use the course photo URL from the Redux state
        alt={course.title}
        className="mt-4 w-full rounded-lg shadow-lg"
      />
      <div className="flex items-center mt-4">
        <span className="text-gray-500 mr-4">Published by {course.publisher}</span>
        <span className="text-gray-500">12,620 views</span>
      </div>
    </div>
  );
};

export default CourseOverview;
