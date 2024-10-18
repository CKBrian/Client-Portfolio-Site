'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovators Inc.",
    content: "Shirly's data analysis skills are unparalleled. Her insights helped us make informed decisions that significantly improved our product.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Lead Data Scientist, AI Solutions Ltd.",
    content: "Working with Shirly was a pleasure. Her expertise in machine learning algorithms brought our project to the next level.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "CTO, DataDriven Corp.",
    content: "Shirly's ability to translate complex data into actionable insights is remarkable. She's a valuable asset to any data science team.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ name, role, content, image, rating }) => {
  return (
    <motion.div
      className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-700 italic mb-4">"{content}"</blockquote>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4 object-cover" src={image} alt={name} />
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-gray-600 text-sm">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover what clients and colleagues say about their experiences working with me.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection