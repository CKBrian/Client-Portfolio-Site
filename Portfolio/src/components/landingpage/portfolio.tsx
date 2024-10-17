import React from 'react';

const projects = [
  {
    title: "Sentiment Analysis",
    description: "Developed a machine learning model to analyze sentiment in customer reviews, achieving 92% accuracy.",
    tags: ["NLP", "Python", "scikit-learn"],
  },
  {
    title: "Time Series Forecasting",
    description: "Created a deep learning model for predicting stock prices using LSTM networks.",
    tags: ["Deep Learning", "TensorFlow", "Finance"],
  },
  {
    title: "Image Classification",
    description: "Built a convolutional neural network to classify medical images, assisting in early disease detection.",
    tags: ["Computer Vision", "PyTorch", "Healthcare"],
  },
  {
    title: "Recommendation System",
    description: "Implemented a collaborative filtering algorithm for a music streaming platform to enhance user experience.",
    tags: ["Recommender Systems", "PySpark", "Big Data"],
  },
  {
    title: "Fraud Detection",
    description: "Developed an anomaly detection system for identifying fraudulent transactions in real-time.",
    tags: ["Anomaly Detection", "R", "Banking"],
  },
  {
    title: "Natural Language Generation",
    description: "Created a GPT-based model for generating human-like text for chatbot applications.",
    tags: ["NLG", "Transformers", "Hugging Face"],
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore a selection of my data science and machine learning projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {project.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;