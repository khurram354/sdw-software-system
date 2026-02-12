import React from 'react';
import { Clock, Video, ShieldCheck, DollarSign, Zap, CheckCircle } from 'lucide-react';
import MotionWrapper from '../wrapper/MotionWrapper';

const Expect = ({ itemVariants }) => {
    const benefits = [
        {
            icon: Clock,
            title: "30-Minute Session",
            description: "Concise demo focused on your specific needs"
        },
        {
            icon: Video,
            title: "Live Interactive",
            description: "Ask questions and see real-time responses"
        },
        {
            icon: ShieldCheck,
            title: "No Sales Pressure",
            description: "Educational session with no obligation"
        },
        {
            icon: DollarSign,
            title: "Free Consultation",
            description: "Get expert advice at no cost"
        },
        {
            icon: Zap,
            title: "Immediate Value",
            description: "Walk away with actionable insights"
        },
        {
            icon: CheckCircle,
            title: "Follow-up Support",
            description: "Continued guidance after the demo"
        }
    ];
    return (
        <MotionWrapper variants={itemVariants}>
            <h3 className="text-2xl font-bold text-green-400 mb-6">What to Expect</h3>
            <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                    <MotionWrapper
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                    >
                        <div className="flex items-start mb-4">
                            <div className="p-2 rounded-lg bg-linear-to-r from-blue-500/20 to-cyan-500/20 mr-4">
                                <benefit.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                                <p className="text-gray-300 text-sm mt-1">{benefit.description}</p>
                            </div>
                        </div>
                    </MotionWrapper>
                ))}
            </div>
        </MotionWrapper>
    )
}

export default Expect