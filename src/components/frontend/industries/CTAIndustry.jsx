import MotionWrapper from "../wrapper/MotionWrapper";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

const CTAIndustry = () => {
  return (
     <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center py-16 px-8">
              <MotionWrapper as="h2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready for Your Industry?
                </span>
                <br />
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get a Custom Demo
                </span>
              </MotionWrapper>

              <MotionWrapper as="p"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
              >
                See exactly how DS System can solve your specific industry challenges with a personalized demo
              </MotionWrapper>

              <MotionWrapper
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center py-5"
              >
                <Link href={`/contact`} className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Industry Demo
                </Link>
              </MotionWrapper>

              <MotionWrapper as="p"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 mt-8 text-sm"
              >
                30-minute custom demo • See your specific use cases
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </section>
  )
}

export default CTAIndustry