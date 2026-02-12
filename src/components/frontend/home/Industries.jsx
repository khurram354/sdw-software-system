import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';

const Industries = ({fadeInUp}) => {
    const industries = [
        { name: "Wholesalers", icon: "🏬", color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
        { name: "Distributors", icon: "📦", color: "bg-gradient-to-r from-green-500 to-emerald-600" },
        { name: "Route Delivery", icon: "🚚", color: "bg-gradient-to-r from-purple-500 to-pink-600" },
        { name: "Cash & Carry", icon: "💰", color: "bg-gradient-to-r from-amber-500 to-orange-600" },
    ];
    return (
              <section className="py-20 bg-linear-to-b from-gray-900/50 to-black/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapper
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Perfect For Your <span className="text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">Industry</span>
            </h2>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`${industry.color} p-12 rounded-2xl mb-4 flex items-center justify-center`}>
                  <span className="text-5xl">{industry.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{industry.name}</h3>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Industries