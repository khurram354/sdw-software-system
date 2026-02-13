import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Route, Warehouse, Users, BarChart3, ShieldCheck, CheckCircle } from 'lucide-react';

const AllNeeds = ({ containerVariants, itemVariants }) => {
    const solutions = [
        {
            icon: Route,
            title: "Route Optimization",
            description: "AI-powered routing that adapts to traffic, distance, time and delivery windows.",
            features: ["Dynamic rerouting", "Multi-stop planning", "Fuel optimization"]
        },
        {
            icon: Warehouse,
            title: "Warehouse Management",
            description: "Complete warehouse operations from receiving to dispatch.",
            features: ["Real-time inventory", "Barcode scanning", "Storage optimization"]
        },
        {
            icon: Users,
            title: "Customer Management",
            description: "End-to-end CRM tailored for distribution businesses.",
            features: ["360° customer view", "Order history", "Price log"]
        },
        {
            icon: BarChart3,
            title: "Business Intelligence",
            description: "Real-time analytics for data-driven decisions.",
            features: ["Sales analytics", "Inventory forecasting", "Performance dashboards", "Custom reports"]
        },
        {
            icon: ShieldCheck,
            title: "Security & Compliance",
            description: "Enterprise security with industry-specific compliance features.",
            features: ["Data encryption", "Role-based access"]
        }
    ];
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-900 to-gray-950">
            <div className="max-w-7xl mx-auto">
                <MotionWrapper
                    initial="hidden"
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <MotionWrapper variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Complete Solution
                            </span>
                            <br />
                            <span className="text-white">For Every Need</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            From route optimization to warehouse management, we provide all the tools you need in one platform
                        </p>
                    </MotionWrapper>

                    <MotionWrapper variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {solutions.map((solution, index) => (
                            <MotionWrapper
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-linear-to-b from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8"
                            >
                                <div className="p-3 rounded-xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 w-fit mb-6">
                                    <solution.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">{solution.title}</h4>
                                <p className="text-gray-300 mb-6">{solution.description}</p>
                                <ul className="space-y-2">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>

                </MotionWrapper>
            </div>
        </section>
    )
}

export default AllNeeds