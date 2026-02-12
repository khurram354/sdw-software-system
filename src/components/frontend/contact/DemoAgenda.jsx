import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';

const DemoAgenda = ({itemVariants}) => {
    const demoagendalist = [
        { time: "0-5 min", title: "Introduction", desc: "Understand your business needs" },
        { time: "5-15 min", title: "Platform Overview", desc: "Key features and capabilities" },
        { time: "15-25 min", title: "Live Walkthrough", desc: "See the platform in action" },
        { time: "25-30 min", title: "Q&A Session", desc: "Address your specific questions" },
        { time: "30+ min", title: "Next Steps", desc: "Implementation roadmap discussion" }
    ]
    return (
        <MotionWrapper variants={itemVariants} className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Demo Agenda</h3>
            <div className="space-y-4">
                {demoagendalist.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-20">
                            <div className="text-sm font-medium text-blue-400">{item.time}</div>
                        </div>
                        <div className="ml-4">
                            <div className="text-lg font-medium text-white">{item.title}</div>
                            <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    )
}

export default DemoAgenda