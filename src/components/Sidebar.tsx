import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-1/4 p-5 h-screen">
      <h2 className="text-xl font-bold">Blender 3D Fundamentals</h2>
      <nav className="mt-5">
        <ul>
          <li className="mb-3">Introduction</li>
          <li className="mb-3">Downloading Blender</li>
          <li className="mb-3">Settings and Preferences</li>
          <li className="mb-3">Blender Interface</li>
          <li className="mb-3">Mesh Modeling</li>
          <li className="mb-3">Mesh Editing Operations</li>
          <li className="mb-3">Most Common Modifiers</li>
          <li className="mb-3">Orthographic References</li>
          <li className="mb-3">Sculpting</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
