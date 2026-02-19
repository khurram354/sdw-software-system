import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Truck, Package, BarChart3, Users, Shield, PoundSterling, Smartphone, Percent, MessageCircle, Briefcase } from 'lucide-react';

const PowerfullFeature = ({ fadeInUp }) => {
    const features = [
        {
            icon: Package,
            title: "Inventory Management",
            description: "Real-time stock control with supplier management",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: Truck,
            title: "Route Planning",
            description: "Automated route optimization & Assigning",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500/10"
        },
        {
            icon: PoundSterling,
            title: "Smart Invoicing",
            description: "Automated invoicing with profit tracking per invoice",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10"
        },
        {
            icon: BarChart3,
            title: "Profit Analytics",
            description: "customer monthly & yearly profitability insights",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-500/10"
        },
        {
            icon: Users,
            title: "Customer Management",
            description: "Complete customer profiles & accounts receivable",
            color: "from-indigo-500 to-purple-500",
            bgColor: "bg-indigo-500/10"
        },
        {
            icon: Shield,
            title: "Multi-User Access",
            description: "Role-based permissions & admin controls",
            color: "from-amber-500 to-yellow-500",
            bgColor: "bg-amber-500/10"
        },
        {
            icon: Smartphone,
            title: "Mobile Orders",
            description: "Mobile Ordering that increases order value.",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-500/10"
        },
        {
            icon: Percent,
            title: "Group Pricing",
            description: "Flexible pricing tiers for customer groups",
            color: "from-teal-500 to-emerald-500",
            bgColor: "bg-teal-500/10"
        },
        {
            icon: MessageCircle,
            title: "Inside Chat Option",
            description: "Real‑time messaging within the distribution system",
            color: "from-violet-500 to-purple-500",
            bgColor: "bg-violet-500/10"
        },
        {
            icon: Briefcase,
            title: "Sales CRM",
            description: "Track leads, opportunities, and manage your sales pipeline",
            color: "from-blue-600 to-indigo-600",
            bgColor: "bg-blue-600/10"
        },
    ];
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <MotionWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Powerful <span className="text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text">Features</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                        Everything you need to run your distribution business efficiently
                    </p>
                </MotionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <MotionWrapper
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`${feature.bgColor} backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-300 group`}
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </MotionWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default PowerfullFeature