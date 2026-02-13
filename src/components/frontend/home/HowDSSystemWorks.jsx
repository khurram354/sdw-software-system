import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';

const HowDSSystemWorks = ({fadeInUp}) => {
    const stepToStart = [
              { step: "01", title: "Setup & Import", desc: "Quick setup with data import from existing systems", icon: "⚡" },
              { step: "02", title: "Optimize & Automate", desc: "Automate inventory, routes, and invoicing", icon: "🤖" },
              { step: "03", title: "Grow & Analyze", desc: "Use insights to grow profits and efficiency", icon: "📊" }
            ]
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
              How <span className="text-transparent bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text">The DS System</span> Works
            </h2>
            <p className="text-gray-400 text-xl">Three simple steps to transform your business</p>
          </MotionWrapper>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-1 bg-linear-to-r from-blue-500 to-purple-500 transform -translate-y-1/2" />
            {stepToStart?.map((item, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50 text-center"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HowDSSystemWorks