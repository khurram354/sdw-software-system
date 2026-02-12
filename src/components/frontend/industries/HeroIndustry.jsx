import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Globe, Rocket, Building2, Truck, Store } from 'lucide-react';
import Link from 'next/link';

const HeroIndustry = ({containerVariants, itemVariants, fadeInUp}) => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        
        <MotionWrapper 
          initial="hidden"
          whileInView='visible'
          viewport={{once:true, amount: 0.2}}
          variants={containerVariants}
          className="max-w-7xl mx-auto relative z-10"
        >
          <MotionWrapper variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
              <Globe className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm font-medium text-purple-300">Industry Solutions</span>
            </div>
            <MotionWrapper as='h1'
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-linear-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                Tailored for Your
              </span>
              <br />
              <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Distribution Business
              </span>
            </MotionWrapper>
            <MotionWrapper as='p' 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Specialized solutions for every type of distribution business, from wholesale 
              to route delivery. We understand your unique challenges and provide tools built specifically for your industry.
            </MotionWrapper>
            
            <MotionWrapper 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={`/contact#book-your-demo`} className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get Industry Demo
              </Link>
            </MotionWrapper>
          </MotionWrapper>
          <MotionWrapper 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          >
            {[
              { label: "Wholesale Supplier", icon: Store },
              { label: "Distributors", icon: Truck },
              { label: "Cash & Carry", icon: Building2 },
              { label: "UK", icon: Globe },
            ].map((stat, index) => (
              <MotionWrapper
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </MotionWrapper>
      </section>
  )
}

export default HeroIndustry