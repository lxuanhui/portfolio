import React from 'react';

const AboutMe = () => (
  <div id='aboutme' className="bg-white px-4 py-8">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="flex-1">
        <h1 className="text-4xl lg:text-6xl font-bold">Hello I'am <span className="text-blue-600">Evren Shah.</span></h1>
        <p className="text-xl lg:text-2xl mt-3 mb-4">Frontend Developer Based In India.</p>
        <p className="text-lg leading-relaxed">
          I'm Evren Shah Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </p>
        <div className="mt-4">
          {/* Placeholder for any additional content or call-to-action buttons */}
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img src="profile-image.jpg" alt="Evren Shah" className="rounded-lg shadow-lg max-w-sm" />
      </div>
    </div>
  </div>
);

export default AboutMe;
