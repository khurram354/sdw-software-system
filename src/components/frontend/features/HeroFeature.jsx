import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Sparkles, Rocket, Package, Clock, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

const HeroFeature = ({ containerVariants, itemVariants, fadeInUp }) => {
    const featureStats = [
        {
            label: "Operational Efficiency",
            value: "Up to 40%",
            icon: Zap,
            description: "Reduce manual work"
        },
        {
            label: "Inventory Accuracy",
            value: "99%+",
            icon: Package,
            description: "Real-time stock levels"
        },
        {
            label: "Faster Processing",
            value: "70% Faster",
            icon: Clock,
            description: "Order to delivery"
        },
        {
            label: "Revenue Growth",
            value: "30% Potential",
            icon: TrendingUp,
            description: "Boost sales"
        }
    ]
    return (
        <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 via-transparent to-cyan-900/10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <MotionWrapper
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{once:true}}
                className="max-w-7xl mx-auto relative z-10"
            >
                <MotionWrapper variants={itemVariants} className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-purple-500/50 to-red-500/50 border border-blue-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-md font-medium text-gray-100">Built for Distributors</span>
                    </div>
                    <MotionWrapper as='h1'
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                            Everything You Need
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            To Scale Your Distribution
                        </span>
                    </MotionWrapper>
                    <MotionWrapper as='p'
                        variants={fadeInUp}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        Comprehensive tools designed specifically for distributors and wholesalers to optimize operations, reduce costs, and boost revenue.
                    </MotionWrapper>

                    <MotionWrapper
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href={`/contact#book-your-demo`} className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                            <Rocket className="w-5 h-5 mr-2" />
                            Book Your Demo
                        </Link>
                    </MotionWrapper>
                </MotionWrapper>
                <MotionWrapper
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
                >
                    {featureStats?.map((stat, index) => (
                        <MotionWrapper
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 mb-4">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>
            </MotionWrapper>
        </section>
    )
}

export default HeroFeature