import React from 'react';
import Sidebar from './components/Sidebar';
import CourseOverview from './components/CourseOverview';
import AddToCart from './components/AddToCart';
import CourseDetails from './components/CourseDetails';
import FAQ from './components/FrequentlyAskedQuestions';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-5">
        <CourseOverview />
        <div className="flex mt-6">
          <CourseDetails />
          <AddToCart />
        </div>
        <FAQ />
      </div>
    </div>
  );
}

export default App;
