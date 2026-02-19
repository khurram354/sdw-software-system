'use client'
import React, { useState } from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Package, Truck, Users, BarChart3, Smartphone, ShieldCheck, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

const DistributionFeature = ({ containerVariants, itemVariants }) => {
    const [activeTab, setActiveTab] = useState("inventory");
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const features = [
        {
            id: "inventory",
            title: "Inventory Management",
            description: "Real-time stock tracking, automated reordering and low stock alert.",
            icon: Package,
            gradient: "from-blue-500 to-cyan-500",
            color: "blue",
            details: [
                "Real-time stock levels",
                "Low stock alerts",
                "Customer specific price system"
            ],
            stats: { accuracy: "100%", reduction: "40%", efficiency: "65%" }
        },
        {
            id: "route",
            title: "Route Optimization",
            description: "AI-powered route planning that reduces delivery time and fuel costs.",
            icon: Truck,
            gradient: "from-green-500 to-emerald-500",
            color: "green",
            details: [
                "AI-powered dynamic routing",
                "Multi-stop optimization",
                "Automated Route Assignment"
            ],
            stats: { accuracy: "95%", reduction: "30%", efficiency: "50%" }
        },
        {
            id: "customers",
            title: "Customer Management",
            description: "Complete CRM with order history and preferences.",
            icon: Users,
            gradient: "from-purple-500 to-pink-500",
            color: "purple",
            details: [
                "360° customer profiles",
                "Order history and preferences",
                "Customer segmentation"
            ],
            stats: { accuracy: "98%", reduction: "25%", efficiency: "45%" }
        },
        {
            id: "analytics",
            title: "Real-time Analytics",
            description: "Interactive dashboards with live data visualization and insights.",
            icon: BarChart3,
            gradient: "from-orange-500 to-red-500",
            color: "orange",
            details: [
                "Live sales dashboards",
                "Live telesales performance",
                "Custom report builder",
            ],
            stats: { accuracy: "100%", reduction: "35%", efficiency: "60%" }
        },
        {
            id: "security",
            title: "Advanced Security",
            description: "Enterprise-grade security with role-based access and end to end encryption.",
            icon: ShieldCheck,
            gradient: "from-gray-800 to-gray-900",
            color: "gray",
            details: [
                "End-to-end encryption",
                "Role-based access control",
                "Two-factor authentication",
            ],
            stats: { accuracy: "99.99%", reduction: "99%", efficiency: "100%" }
        },
        {
            id: "mobile",
            title: "Mobile Ordering App",
            description: "Fully integrated mobile app, Customer order with live pricing.",
            icon: Smartphone,
            gradient: "from-indigo-500 to-purple-500",
            color: "indigo",
            details: [
                "Build-in suggestive add-ons to boost complementary sales",
                "Fully integrated with DS System",
                "Live pricing displayed during customer orders",
                "Encourage repeate purchase automatically"
            ],
            stats: { accuracy: "99%", reduction: "20%", efficiency: "70%" }
        },
        {
            id: "crm",
            title: "Sales CRM",
            description: "Complete sales pipeline management with lead tracking and opportunity management.",
            icon: Briefcase,
            gradient: "from-blue-600 to-indigo-600",
            color: "indigo",
            details: [
                "Lead and opportunity tracking",
                "Sales stage management",
                "Activity logging and follow-ups"
            ],
            stats: { accuracy: "95%", reduction: "30%", efficiency: "55%" }
        },
    ];
    const currentFeature = features.find(f => f.id === activeTab) || features[0];
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                                Complete Distribution
                            </span>
                            <br />
                            <span className="text-white">Platform Features</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Every tool you need to manage your business efficiently
                        </p>
                    </MotionWrapper>
                    <MotionWrapper variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center ${activeTab === feature.id
                                    ? `bg-linear-to-r ${feature.gradient} text-white shadow-lg shadow-${feature.color}-500/25`
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white shadow-xl'
                                    }`}
                            >
                                <feature.icon className="w-5 h-5 mr-2" />
                                {feature.title}
                            </button>
                        ))}
                    </MotionWrapper>
                    <MotionWrapper
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 overflow-hidden mb-20"
                    >
                        <div className="p-8 md:p-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className={`p-3 rounded-xl bg-linear-to-r ${currentFeature.gradient} mr-4`}>
                                            <currentFeature.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white">{currentFeature.title}</h3>
                                            <p className="text-gray-300 mt-2">{currentFeature.description}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {currentFeature.details.map((detail, index) => (
                                            <MotionWrapper as='li'
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.5 }}
                                                className="flex items-center text-gray-300"
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                                {detail}
                                            </MotionWrapper>
                                        ))}
                                    </ul>
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {Object.entries(currentFeature.stats).map(([key, value], index) => (
                                            <div key={key} className="bg-gray-800/50 rounded-xl p-4 text-center">
                                                <div className="text-2xl font-bold text-white">{value}</div>
                                                <div className="text-sm text-gray-400 capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="relative h-64 md:h-80 bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                                        <div className="absolute inset-0 p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <div className="text-sm text-gray-400">Dashboard Preview</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="bg-gray-700/50 rounded-lg p-3">
                                                        <div className="h-2 bg-gray-600 rounded mb-2"></div>
                                                        <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-gray-800/50 rounded-xl p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="h-3 bg-gray-600 rounded w-1/3"></div>
                                                    <div className="h-3 bg-gray-600 rounded w-1/4"></div>
                                                </div>
                                                <div className="space-y-2">
                                                    {[1, 2, 3, 4].map(i => (
                                                        <div key={i} className="flex items-center justify-between">
                                                            <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                                                            <div className="h-2 bg-gray-700 rounded w-1/4"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <MotionWrapper
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/30"
                                    ></MotionWrapper>
                                    <MotionWrapper
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                                        className="absolute -bottom-4 -left-4 w-20 h-20 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30"
                                    ></MotionWrapper>
                                </div>
                            </div>
                        </div>
                    </MotionWrapper>
                    <MotionWrapper variants={itemVariants}>
                        <h3 className="text-3xl font-bold text-center mb-12">All Features at a Glance</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <MotionWrapper
                                    key={feature.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    onMouseEnter={() => setHoveredFeature(feature.id)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                    className={`bg-linear-to-t from-gray-800/30 to-gray-900 backdrop-blur-sm border ${hoveredFeature === feature.id ? `border-${feature.color}-500/50` : 'border-gray-700/50'} rounded-2xl p-6 transition-all duration-300 shadow-2xl`}
                                >
                                    <div className={`p-3 rounded-xl bg-linear-to-r ${feature.gradient} w-fit mb-4`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                                    <p className="text-gray-300 mb-4">{feature.description}</p>
                                    <div className="flex items-center text-sm text-gray-400">
                                    </div>
                                </MotionWrapper>
                            ))}
                        </div>
                    </MotionWrapper>
                </MotionWrapper>
            </div>
        </section>
    )
}

export default DistributionFeature