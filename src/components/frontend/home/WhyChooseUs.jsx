import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';

const WhyChooseUs = ({ fadeInUp }) => {
    const whyChooseUs = [
        {
            icon: "🎯",
            title: "Built for Distribution",
            desc: "Specifically designed for wholesale and route-based businesses"
        },
        {
            icon: "⚡",
            title: "Real-Time Everything",
            desc: "Live inventory, sales, and profit calculations"
        },
        {
            icon: "👥",
            title: "Team-Friendly",
            desc: "Multi-user access with role-based permissions"
        }
    ]
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
                        Why Choose <span className="text-transparent bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text">DS System</span>
                    </h2>
                </MotionWrapper>

                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUs?.map((item, index) => (
                        <MotionWrapper
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default WhyChooseUs