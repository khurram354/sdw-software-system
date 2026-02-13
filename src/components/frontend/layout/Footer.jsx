import React from 'react'
import MotionWrapper from '../wrapper/MotionWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SDW DS System
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Streamlining distribution operations with innovative technology solutions designed for modern businesses.
            </p>
          </MotionWrapper>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="/industries" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Industries
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </MotionWrapper>
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <Link href={'tel:02036270522'}>+44 20 3627 0522</Link>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <Link href="mailto:support@sdw-ds.com">support@sdw-ds.com</Link>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span>Office 19, Floor 2, Al Arif Shipping Building Port Saeed<br />Dubai UAE</span>
              </li>
            </ul>
          </MotionWrapper>
        </div>
        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} SDW DS System. All rights reserved.
          </MotionWrapper>
          <MotionWrapper 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once:true}}
          transition={{delay: 0.2}}
          className='flex gap-4 text-sm'
          >
            <Link href={`/terms&conditions`} className='text-blue-400 hover:text-blue-300 hover:border-b-2'>Terms & Conditions</Link>
            <Link href={`/privacy-policy`} className='text-blue-400 hover:text-blue-300 hover:border-b-2'>Privacy Policy</Link>
            <Link href={`/cookies-policy`} className='text-blue-400 hover:text-blue-300 hover:border-b-2'>Cookie Policy</Link>
          </MotionWrapper>
        </div>
      </div>
    </footer>
  )
}
export default Footer