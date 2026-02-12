import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { CheckCircle } from 'lucide-react';

const Reporting = () => {
    const performance = [
        "Customer profitability tracking",
        "Sales performance dashboards",
        "Expense tracking",
        "Single product sales tracking",
        "Telesales performance tracking",
        "Counter & delivery sales tracking",
    ]
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <MotionWrapper
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Real-Time <span className="text-transparent bg-linear-to-r from-orange-400 to-red-400 bg-clip-text">Reporting & Insights</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Make data-driven decisions with comprehensive analytics that matter to your distribution business.
                        </p>
                        <ul className="space-y-4">
                            {performance?.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </MotionWrapper>
                    <MotionWrapper
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-sm text-gray-400">Live Dashboard</div>
                            </div>
                            <div className="space-y-4">
                                {[70, 85, 60, 90, 75, 95].map((height, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-24 text-gray-400">Route {i + 1}</div>
                                        <div className="flex-1 h-6 bg-gray-700 rounded-full overflow-hidden">
                                            <MotionWrapper
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 1 }}
                                                className={`h-full rounded-full ${height > 80 ? 'bg-linear-to-r from-green-500 to-emerald-500' :
                                                    height > 70 ? 'bg-linear-to-r from-blue-500 to-cyan-500' :
                                                        'bg-linear-to-r from-amber-500 to-orange-500'
                                                    }`}
                                            />
                                        </div>
                                        <div className="w-12 text-right font-semibold">{height}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}

export default Reporting