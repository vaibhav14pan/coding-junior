import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CourseDetails = () => {
  const course = useSelector((state: RootState) => state.course.course);

  return (
    <div className="p-6 flex-grow bg-white rounded-lg shadow-lg mr-6">
      <h2 className="text-xl font-bold mb-3">Course Details</h2>
      <ul className="space-y-3">
        <li><strong>Lessons:</strong> {course.lessons}</li>
        <li><strong>Duration:</strong> {course.duration}</li>
        <li><strong>Skill Level:</strong> {course.level}</li>
        <li><strong>Views:</strong> {course.views}</li>
      </ul>
    </div>
  );
};

export default CourseDetails;
