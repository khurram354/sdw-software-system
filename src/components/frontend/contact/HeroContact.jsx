import MotionWrapper from "../wrapper/MotionWrapper";
import { Rocket } from "lucide-react";

const HeroContact = ({ containerVariants, itemVariants, fadeInUp }) => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/10 via-transparent to-cyan-900/10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <MotionWrapper
                initial="hidden"
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto relative z-10"
            >
                <MotionWrapper variants={itemVariants} className="text-center mb-12">
                    <div className="flex justify-center text-blue-500 py-5"><Rocket size={60}/></div>
                    <MotionWrapper as="h1"
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold"
                    >
                        <span className="bg-linear-to-r from-green-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                            See The DS System
                        </span>
                        <br />
                        <span className="inline-block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent py-10">
                            In Action
                        </span>
                    </MotionWrapper>
                    <MotionWrapper as="p"
                        variants={fadeInUp}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        Get a personalized walkthrough of how DS System can transform your distribution business.
                        See exactly how our platform solves your specific challenges.
                    </MotionWrapper>
                </MotionWrapper>
            </MotionWrapper>
        </section>
    )
}

export default HeroContact