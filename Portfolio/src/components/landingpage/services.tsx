import React from 'react';
import { BarChart2, Brain, PieChart } from 'lucide-react';

const services = [
  {
    name: 'Data Analysis',
    description: 'In-depth analysis of your data to uncover patterns, trends, and insights that inform strategic decisions.',
    icon: BarChart2,
  },
  {
    name: 'Machine Learning Solutions',
    description: 'Custom ML models tailored to your specific needs, from predictive analytics to natural language processing.',
    icon: Brain,
  },
  {
    name: 'Data Visualization',
    description: 'Creating compelling visual representations of data to communicate complex information effectively.',
    icon: PieChart,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leveraging cutting-edge techniques to solve complex data challenges and drive business growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="group relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-200 ease-in-out hover:shadow-lg hover:ring-gray-900/10 hover:-translate-y-1">
                  <dt className="text-base font-semibold leading-7 text-gray-900 flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors duration-200 ease-in-out">
                      <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="ml-4">{service.name}</span>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;