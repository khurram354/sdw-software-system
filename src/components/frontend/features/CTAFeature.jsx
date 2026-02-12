import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';

const CTAFeature = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center py-16 px-8">
              <MotionWrapper as='h2'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Take Control Of
                </span>
                <br />
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Distribution Business?
                </span>
              </MotionWrapper>

              <MotionWrapper as='p'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
              >
                Discover how DS System can streamline your sales, inventory, Invoicing and delivery workflows in one platform.
              </MotionWrapper>    
            </div>
          </MotionWrapper>
        </div>
      </section>
  )
}

export default CTAFeature