import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { DollarSign, Clock, TrendingUp, CheckCircle, Users2, Zap } from 'lucide-react';

const MeasureableResult = ({containerVariants, itemVariants,}) => {
      const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Cut operational costs by up to 40% with automated workflows.",
      metric: "40%",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce manual data entry time by 70% with automation.",
      metric: "70%",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Increase Sales",
      description: "Boost sales by 35% with better customer insights.",
      metric: "35%",
      color: "text-purple-400"
    },
    {
      icon: CheckCircle,
      title: "Improve Accuracy",
      description: "Achieve 99.9% accuracy in inventory tracking.",
      metric: "99.9%",
      color: "text-cyan-400"
    },
    {
      icon: Users2,
      title: "Customer Satisfaction",
      description: "Increase customer retention by 50% with better service.",
      metric: "50%",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Streamline operations with 80% faster order processing.",
      metric: "80%",
      color: "text-red-400"
    }
  ];
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-900 via-gray-800r to-gray-900">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper
            initial="hidden"
            whileInView='visible'
            viewport={{once:true, amount: 0.2}}
            variants={containerVariants}
          >
            <MotionWrapper variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Measurable Results
                </span>
                <br />
                <span className="text-white">That Drive Growth</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the impact that the DS System can have on your wholesale and distribution business
              </p>
            </MotionWrapper>
            <MotionWrapper variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {benefits.map((benefit, index) => (
                <MotionWrapper
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-linear-to-br from-gray-900/50 to-gray-800 border border-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-xl bg-gray-800/50 mr-4">
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div className="text-4xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {benefit.metric}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </MotionWrapper>
              ))}
            </MotionWrapper>       
          </MotionWrapper>
        </div>
      </section>
  )
}

export default MeasureableResult