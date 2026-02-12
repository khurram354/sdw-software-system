import React from "react";

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 text-white py-10">
            <div className="absolute inset-0 bg-linear-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-800 min-h-screen rounded-lg">
                <div className="bg-gray-800 shadow-2xl rounded-xl border border-gray-900 overflow-hidden">
                    <div className="bg-gray-950 px-6 py-5 border-b border-gray-800">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    COOKIE POLICY
                                </h1>
                                <p className="text-md text-gray-400 mt-1">
                                    Last updated: 02/02/2026
                                </p>
                            </div>
                            <div className="text-sm text-gray-300 sm:text-right">
                                <p className="font-medium text-gray-200">S D W MARKETING MANGEMENT CO. L.L.C</p>
                                <p>Email: hessan@sdw-ds.com</p>
                                <p>Phone: 07896737814</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-8 space-y-8">
                        <p className="text-gray-300 leading-relaxed text-sm">
                            This Cookie Policy explains how S D W Marketing Management Co. L.L.C uses cookies and similar technologies.
                        </p>
                        <section>
                            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                                1. What Are Cookies?
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Cookies are small text files placed on your device to improve website functionality and user experience.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                                2. Types of Cookies We Use
                            </h2>
                            <ul className="list-disc pl-8 space-y-1 text-gray-300 text-sm">
                                <li>
                                    <span className="font-medium text-gray-200">Strictly necessary cookies</span> – required for core functionality
                                </li>
                                <li>
                                    <span className="font-medium text-gray-200">Performance cookies</span> – analytics and usage insights
                                </li>
                                <li>
                                    <span className="font-medium text-gray-200">Functional cookies</span> – user preferences
                                </li>
                                <li>
                                    <span className="font-medium text-gray-200">Marketing cookies</span> – only used with consent
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                                3. Managing Cookies
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                You can manage or disable cookies through your browser settings. Some features may not function correctly if cookies are disabled.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
                                4. Changes
                            </h2>
                            <p className="text-gray-300 text-sm">
                                We may update this Cookie Policy from time to time.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};
