import Link from 'next/link';
import React from 'react';
import { PoundSterling } from 'lucide-react';

export default function NoSetupCostBanner() {
  return (
    <div className="relative max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-linear-to-br from-[#0b2b5c] via-[#1b3b7a] to-[#2a4f9e] rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-8 w-56 h-56 bg-white/5 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-yellow-300 text-xs font-semibold px-4 py-2 rounded-full border border-white/30 mb-4">
              🚀 LIMITED TIME OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-500 via-green-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-3">
              Zero Setup Cost
            </h2>
            <p className="text-lg text-white/90 max-w-xl mx-auto lg:mx-0 mb-6">
              Start your distribution ERP today – no implementation fees, no hidden charges. Just pure value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href={`/contact#book-your-demo`}
                className="bg-white text-[#0b2b5c] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a demo →
              </Link>
            </div>
          </div>
          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/30">
              <PoundSterling size={100} className="text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t border-white/20 py-5 px-4 text-white/80 text-sm">
          <span className="flex items-center gap-2">✅ No credit card required</span>
          <span className="flex items-center gap-2">🔒 Secure & confidential</span>
        </div>
      </div>
    </div>
  );
}