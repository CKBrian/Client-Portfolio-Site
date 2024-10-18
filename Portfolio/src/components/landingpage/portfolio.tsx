import React, { useState } from 'react';

const projects = [
  {
    title: "ANALYSIS OF THE UNITED NATIONS ECONOMIC INDICATORS FOR 2015-2023.",
    description: "Used Python and SQL queries to extract data insights that answer some of UN’s concerning questions about country’s access to basic services. I applied seaborn and matplotlib Python libraries to visualize these insights.",
    tags: ["NLP", "Python", "scikit-learn"],
    thumbnail: "https://shirlyneodhiambo.carrd.co/assets/images/image02.jpg?v=f952cfd6",
    githubUrl: "https://github.com/Shirlyngit/Analysis-of-UN-Dataset---Access-to-Basic-Services",
  },
  {
    title: "CUSTOMER SEGMENTATION USING K-MEANS CLUSTERING",
    description: "Used Machine Learning to divide and group Mall customers into clusters (spender - groups) based on their spending score, that ranges from 1-100.",
    tags: ["Deep Learning", "TensorFlow", "Finance"],
    thumbnail: "https://shirlyneodhiambo.carrd.co/assets/images/image01.jpg?v=f952cfd6",
    githubUrl: "https://github.com/Shirlyngit/Customer_Segmentation_using_K_Means_Clustering",
  },
  {
    title: "LOAN DATASET VARIABLE SELECTION USING PYTHON.",
    description: "Out of 12 given features that influence Loan Size in this data, I use statistical correlations to reduce these features to only 7 that are relevant and significant to the Loan Size of a bank customer.",
    tags: ["Computer Vision", "PyTorch", "Healthcare"],
    thumbnail: "https://shirlyneodhiambo.carrd.co/assets/images/image05.jpg?v=f952cfd6",
    githubUrl: "https://github.com/Shirlyngit/Variable_Feature_Selection_on_a_Loan_Dataset",
  },
  // {
  //   title: "Recommendation System",
  //   description: "Implemented a collaborative filtering algorithm for a music streaming platform to enhance user experience.",
  //   tags: ["Recommender Systems", "PySpark", "Big Data"],
  //   thumbnail: "/assets/recommendation-system-thumb.jpg",
  //   githubUrl: "https://github.com/yourusername/recommendation-system",
  // },
  // {
  //   title: "Fraud Detection",
  //   description: "Developed an anomaly detection system for identifying fraudulent transactions in real-time.",
  //   tags: ["Anomaly Detection", "R", "Banking"],
  //   thumbnail: "/assets/fraud-detection-thumb.jpg",
  //   githubUrl: "https://github.com/yourusername/fraud-detection",
  // },
  // {
  //   title: "Natural Language Generation",
  //   description: "Created a GPT-based model for generating human-like text for chatbot applications.",
  //   tags: ["NLG", "Transformers", "Hugging Face"],
  //   thumbnail: "/assets/nlg-thumb.jpg",
  //   githubUrl: "https://github.com/yourusername/nlg-chatbot",
  // },
];

const PortfolioSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="portfolio" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore a selection of my data science and machine learning projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="relative flex flex-col items-start justify-between cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <div className="relative w-full bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{project.description}</p>
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
              </div>
              {hoveredProject === project.title && (
                <div className="absolute -top-44 left-1/2 transform -translate-x-1/2 z-10 w-64 h-40 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
                  <img 
                    src={project.thumbnail} 
                    alt={`${project.title} thumbnail`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;