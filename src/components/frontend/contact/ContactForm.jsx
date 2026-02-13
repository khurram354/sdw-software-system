'use client'
import React, { useState } from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import ContactInfo from './ContactInfo';
import DemoAgenda from './DemoAgenda';
import Expect from './Expect';
import { toast } from 'react-toastify';

const ContactForm = ({ containerVariants, itemVariants }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        companySize: "",
        industry: "",
        jobTitle: "",
        country: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
        agreeToTerms: false,
    });
    const slideIn = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const companySizes = [
        "1-10 employees",
        "11-50 employees",
        "51-200 employees",
    ];

    const industries = [
        "Wholesale Distribution",
        "Route Delivery",
        "Cash & Carry",
        "B2B Distribution",
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const resp = await fetch(`/api/send_sdw_system_email`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            const data = await resp.json();
            if(data.success){toast.success(data.message)}else{toast.error("network error, try again")}
             setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                companySize: "",
                industry: "",
                jobTitle: "",
                country: "",
                preferredDate: "",
                preferredTime: "",
                message: "",
                agreeToTerms: false
            });
            setLoading(false)
        } catch (error) { console.log("submit error: ",error); setLoading(false)}
    };
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <MotionWrapper
                        initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                        variants={slideIn}
                        className="lg:sticky lg:top-24 h-fit"
                    >
                        <div id='book-your-demo' className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-8">
                            <h2 className="text-3xl font-bold text-green-400 mb-2">Book Your Demo</h2>
                            <p className="text-gray-400 mb-8">Fill out the form and we'll contact you within 24 hours</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Smith"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="+44 123-4567"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Your Company Inc."
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Company Size *
                                        </label>
                                        <select
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                                        >
                                            <option value="">Select size</option>
                                            {companySizes.map(size => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Industry *
                                        </label>
                                        <select
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                                        >
                                            <option value="">Select industry</option>
                                            {industries.map(industry => (
                                                <option key={industry} value={industry}>{industry}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Job Title *
                                        </label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Operations Manager"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Country *
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="United Kingdom"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Preferred Time
                                        </label>
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        >
                                            <option value="">Any time</option>
                                            <option value="morning">Morning (9AM - 12PM)</option>
                                            <option value="afternoon">Afternoon (1PM - 5PM)</option>
                                            <option value="evening">Evening (5PM - 8PM)</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Specific Questions or Requirements
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your specific challenges or what you'd like to focus on during the demo..."
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 mr-3 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                                        />
                                        <span className="text-sm text-gray-300">
                                            I agree to the processing of my personal data in accordance with the{' '}
                                            <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                                                Privacy Policy
                                            </Link> and {" "}
                                            <Link href={`/terms&conditions`} className='text-blue-400 hover:text-blue-300'>Terms & Conditions</Link>
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                >
                                    <Rocket className="w-5 h-5 mr-2" />
                                    {loading ? "In Process" : "Schedule Your Demo"}
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    We use cookies to improve your experience. By continuing, you agree to our{' '}
                                    <Link href="/cookies-policy" className="text-blue-400 hover:text-blue-300">
                                        Cookie Policy
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </MotionWrapper>
                    <MotionWrapper
                        initial="hidden"
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="space-y-12"
                    >
                        <Expect itemVariants={itemVariants} />
                        <DemoAgenda itemVariants={itemVariants} />
                        <ContactInfo itemVariants={itemVariants} />
                    </MotionWrapper>
                </div>
            </div>
        </section>
    )
}

export default ContactForm