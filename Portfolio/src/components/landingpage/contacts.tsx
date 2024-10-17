import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Interested in working together? Let's connect and discuss how I can help with your data science needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:shirly@example.com"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Me
            </a>
            <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900">
              View Portfolio <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;