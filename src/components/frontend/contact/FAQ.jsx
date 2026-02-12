import MotionWrapper from "../wrapper/MotionWrapper"

const FAQ = ({containerVariants, itemVariants}) => {
    const faqQuestions = [
        {
            q: "How long is the demo session?",
            a: "Our demos are typically 30 minutes, but we can extend if needed to cover all your questions."
        },
        {
            q: "Who will conduct the demo?",
            a: "You'll meet with one of our product specialists who has experience in your specific industry."
        },
        {
            q: "What do I need to prepare?",
            a: "Just bring your questions! No preparation needed. We'll tailor the demo to your business."
        },
        {
            q: "Is there any cost for the demo?",
            a: "No, the demo is completely free with no obligation to purchase."
        },
        {
            q: "Can I request specific features to be shown?",
            a: "Absolutely! Let us know your specific interests when booking, and we'll customize the demo accordingly."
        }
    ]
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-900 to-gray-950">
            <div className="max-w-4xl mx-auto">
                <MotionWrapper
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <MotionWrapper variants={itemVariants} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-orange-400">Frequently Asked Questions</h2>
                        <p className="text-gray-300">Common questions about our demo process</p>
                    </MotionWrapper>

                    <div className="space-y-4">
                        {faqQuestions.map((faq, index) => (
                            <MotionWrapper
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-700/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                            >
                                <h4 className="text-lg font-semibold text-blue-400 mb-2">{faq.q}</h4>
                                <p className="text-gray-300">{faq.a}</p>
                            </MotionWrapper>
                        ))}
                    </div>
                </MotionWrapper>
            </div>
        </section>
    )
}

export default FAQ