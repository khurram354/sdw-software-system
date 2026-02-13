import React from 'react'
import Link from 'next/link';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Zap, Target } from "lucide-react"
const HeroSec = () => {
    return (
        <section className="relative py-28 px-6 max-w-7xl mx-auto">
            <MotionWrapper
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10"
            >
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                    <Zap className="w-4 h-4" />
                    TRANSFORM YOUR DISTRIBUTION BUSINESS
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-linear-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    All-in-One Distribution
                    <span className="block"> & ERP System</span>
                </h1>

                <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
                    Unify inventory, routes, customers, invoicing, and reporting in one powerful platform.
                    Built specifically for <span className="font-semibold text-blue-300">wholesalers</span> and <span className="font-semibold text-green-300">route-based businesses</span>.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <MotionWrapper
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className="bg-linear-to-r from-blue-600 to-cyan-500 px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                            href="/contact#book-your-demo">
                            <Target className="w-5 h-5" />
                            Book a Free Demo
                        </Link>
                    </MotionWrapper>
                    <Link href={'tel:02036270522'}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:translate-middle shadow-2xl"
                    >
                        Request a Call Back
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { value: "99%", label: "Stock Accuracy" },
                        { value: "40%", label: "Time Saved" },
                        { value: "25%", label: "Profit Increase" },
                        { value: "99%", label: "Route Management" }
                    ].map((stat, index) => (
                        <MotionWrapper key={index} transition={{ delay: index * 0.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-2xl">
                            <div className="text-3xl font-bold text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">
                                {stat.value}
                            </div>
                            <div className="text-gray-400">{stat.label}</div>
                        </MotionWrapper>
                    ))}
                </div>
            </MotionWrapper>
        </section>
    )
}

export default HeroSec