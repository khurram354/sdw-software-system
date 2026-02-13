'use client';
import React, {useState} from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Store, Package, Truck, ShoppingCart, Building2, Target, CheckCircle, ArrowRight, TrendingUp, Clock, DollarSign, Award, Zap } from 'lucide-react';

export const Solution = ({containerVariants, itemVariants}) => {
    const [activeIndustry, setActiveIndustry] = useState("wholesalers");
    const [hoveredBenefit, setHoveredBenefit] = useState(null);
     const industries = [
    {
      id: "wholesalers",
      title: "Wholesalers",
      description: "Streamline bulk operations and optimize supply chains.",
      icon: Store,
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
      challenges: [
        "Complex inventory across multiple warehouses",
        "Managing large order volumes",
        "Supplier coordination challenges",
        'Managing customer ordering'
      ],
      solutions: [
        "Multi-location inventory sync",
        "Bulk order processing",
        "Managing all suppliers record",
        "All in one ordering solution"
      ],
    },
    {
      id: "route-delivery",
      title: "Route Delivery",
      description: "Optimize delivery routes and improve last-mile efficiency.",
      icon: Truck,
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
      challenges: [
        "Inefficient route planning",
        "Fuel cost management",
        "Distance & time mangagement",
      ],
      solutions: [
        "AI-powered route optimization",
        "Fuel consumption analytics",
        "Smart route optimization"
      ],
    },
    {
      id: "cash-carry",
      title: "Cash & Carry",
      description: "Modernize warehouse operations with quick invoicing.",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
      color: "orange",
      challenges: [
        "Long checkout queues",
        "Stock availability issues",
        "Price disputes",
      ],
      solutions: [
        "Handle counter sale quickly",
        "Real-time stock availability",
        "Digital price verification",
      ],
    },
    {
      id: "b2b",
      title: "B2B Distribution",
      description: "Specialized solutions for business-to-business distribution with complex pricing tiers.",
      icon: Building2,
      gradient: "from-indigo-500 to-blue-500",
      color: "indigo",
      challenges: [
        "Complex pricing structures",
        "Long sales cycles",
      ],
      solutions: [
        "Tiered pricing automation",
        "Sales pipeline management",
      ],
    },
  ];
   const industryBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Average 45% revenue increase within first year",
      metric: "45%",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Time Saved",
      description: "Reduce manual processes by 70% with automation",
      metric: "70%",
      color: "text-blue-400"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Cut operational costs by up to 40%",
      metric: "40%",
      color: "text-purple-400"
    },
    {
      icon: Award,
      title: "Customer Satisfaction",
      description: "Improve customer retention by 60%",
      metric: "60%",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Increase order processing speed by 80%",
      metric: "80%",
      color: "text-red-400"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Achieve 99.9% order accuracy rate",
      metric: "99.9%",
      color: "text-cyan-400"
    }
  ];
  const currentIndustry = industries.find(f => f.id === activeIndustry) || industries[0];
  return (
     <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper
            initial="hidden"
            whileInView='visible'
            viewport={{once:true, amount: 0.2}}
            variants={containerVariants}
          >
            <MotionWrapper variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Industry-Specific
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't believe in one-size-fits-all. Each industry gets tailored features that address unique challenges.
              </p>
            </MotionWrapper>
            <MotionWrapper variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${activeIndustry === industry.id 
                    ? `bg-linear-to-r ${industry.gradient} text-white shadow-lg shadow-${industry.color}-500/25` 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.title}
                </button>
              ))}
            </MotionWrapper>
            <MotionWrapper
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 overflow-hidden mb-20"
            >
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-xl bg-linear-to-r ${currentIndustry.gradient} mr-4`}>
                        <currentIndustry.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{currentIndustry.title}</h3>
                        <p className="text-gray-300 mt-2">{currentIndustry.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="text-red-400 mr-2">Challenges</span>
                          <Target className="w-4 h-4" />
                        </h4>
                        <ul className="space-y-3">
                          {currentIndustry.challenges.map((challenge, index) => (
                            <MotionWrapper as='li'
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center text-gray-300"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                              {challenge}
                            </MotionWrapper>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="text-green-400 mr-2">Our Solutions</span>
                          <CheckCircle className="w-4 h-4" />
                        </h4>
                        <ul className="space-y-3">
                          {currentIndustry.solutions.map((solution, index) => (
                            <MotionWrapper as='li'
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center text-gray-300"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {solution}
                            </MotionWrapper>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative h-64 md:h-80 bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                      {/* Industry-specific mockup */}
                      <div className="absolute inset-0 p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-sm text-gray-400">{currentIndustry.title} Dashboard</div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-gray-700/50 rounded-lg p-3">
                            <div className="flex justify-between mb-2">
                              <div className="h-2 bg-gray-600 rounded w-1/4"></div>
                              <div className="h-2 bg-gray-600 rounded w-1/6"></div>
                            </div>
                            <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-700/50 rounded-lg p-3">
                              <div className="h-2 bg-gray-600 rounded mb-2"></div>
                              <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                            </div>
                            <div className="bg-gray-700/50 rounded-lg p-3">
                              <div className="h-2 bg-gray-600 rounded mb-2"></div>
                              <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-800/50 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="h-3 bg-gray-600 rounded w-1/3"></div>
                              <div className="h-3 bg-gray-600 rounded w-1/4"></div>
                            </div>
                            <div className="space-y-2">
                              {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between">
                                  <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                                  <div className="h-2 bg-gray-700 rounded w-1/4"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <MotionWrapper
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30"
                    ></MotionWrapper>
                    <MotionWrapper
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30"
                    ></MotionWrapper>
                  </div>
                </div>
              </div>
            </MotionWrapper>
            <MotionWrapper variants={itemVariants} className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-12">Proven Results Across Industries</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryBenefits.map((benefit, index) => (
                  <MotionWrapper
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className={`bg-gray-800/30 backdrop-blur-sm border ${hoveredBenefit === index ? 'border-purple-500/50' : 'border-gray-700/50'} rounded-2xl p-6 transition-all duration-300 shadow-2xl`}
                  >
                    <div className="flex items-start mb-4">
                      <div className="p-2 rounded-lg bg-gray-800/50 mr-3">
                        <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                      </div>
                      <div className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {benefit.metric}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </MotionWrapper>
                ))}
              </div>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>
  )
}
