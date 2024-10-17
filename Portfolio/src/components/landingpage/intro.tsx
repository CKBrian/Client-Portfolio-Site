import React from 'react';
import ShirlynePhoto from '../../assets/shirlyne-photo.jpg';

const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introduction</h2>
        </div>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <img
                src={ShirlynePhoto}
                alt="Shirlyne Odhiambo"
                className="w-full h-full object-cover rounded-lg md:w-3/4 mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Shirlyne Odhiambo</h3>
              <p className="text-lg text-gray-600 mb-4">
                Welcome to my portfolio! I'm a passionate data scientist with expertise in machine learning,
                statistical analysis, and data visualization.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                My goal is to transform complex data into actionable insights that drive business decisions and innovation.
                With a strong background in both theoretical and applied data science, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-gray-600">
                Whether it's developing predictive models, optimizing algorithms, or creating intuitive data visualizations,
                I'm committed to delivering high-quality solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
