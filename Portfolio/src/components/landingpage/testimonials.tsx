import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovators Inc.",
    content: "Shirly's data analysis skills are unparalleled. Her insights helped us make informed decisions that significantly improved our product.",
  },
  {
    name: "Jane Smith",
    role: "Lead Data Scientist, AI Solutions Ltd.",
    content: "Working with Shirly was a pleasure. Her expertise in machine learning algorithms brought our project to the next level.",
  },
  {
    name: "Alex Johnson",
    role: "CTO, DataDriven Corp.",
    content: "Shirly's ability to translate complex data into actionable insights is remarkable. She's a valuable asset to any data science team.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear what clients and colleagues have to say about working with me.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{`${testimonial.role}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;