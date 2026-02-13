import React from 'react'
import MotionWrapper from '../wrapper/MotionWrapper';
import MotionButtonWrapper from '../wrapper/MotionButtonWrapper';
import {CheckCircle} from 'lucide-react';
import Link from 'next/link';

const CTASec = () => {
  return (  
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">Transform</span> Your Wholesale & Distribution Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join us using The DS System to streamline operations and boost profitability.
            </p>
            
            <Link href={`/contact`} className="flex flex-col sm:flex-row justify-center gap-6">
              <MotionButtonWrapper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-blue-600 to-cyan-500 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Schedule Personalized Demo
              </MotionButtonWrapper>
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Full implementation support</span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
  )
}

export default CTASec