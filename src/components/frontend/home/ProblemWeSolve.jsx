import React from 'react'
import MotionWrapper from '../wrapper/MotionWrapper';

const ProblemWeSolve = ({fadeInUp}) => {
    const problems = [
        { text: "Inaccurate stock levels causing lost sales", icon: "❌" },
        { text: "Manual invoicing slowing down operations", icon: "📄" },
        { text: "No visibility on route profitability", icon: "👁️" },
        { text: "Time-consuming cash reconciliation", icon: "⏰" },
        { text: "Disconnected systems creating chaos", icon: "🔗" },
        { text: "Paper-based processes creating errors", icon: "📝" },
        { text: "Customer-specific pricing not applied correctly", icon: "💰" },
        { text: "Orders taken on wrong customer-specific days", icon: "📅" },
        { text: "Manual route planning and vehicle assignment", icon: "🚚" }
    ];
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <section className="sm:py-10 md:py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <MotionWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="md:text-5xl text-3xl font-bold mb-4 leading-relaxed">
                        Solving the Biggest Challenges in <span className="text-transparent bg-linear-to-r from-red-400 to-orange-400 bg-clip-text inline-block">Wholesale & Distribution</span>
                    </h2>
                    <p className="text-transparent bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        From pricing control to route management, The DS System is purpose-build to help wholesale and distribution businesses operate smarter and more profitably.
                    </p>
                </MotionWrapper>
                <MotionWrapper
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {problems.map((problem, index) => (
                        <MotionWrapper
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 shadow-2xl">
                                <span className="text-2xl">{problem.icon}</span>
                                <p className="text-lg font-medium">{problem.text}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </MotionWrapper>
            </div>
        </section>
    )
}

export default ProblemWeSolve