import React from 'react';
import MotionWrapper from '../wrapper/MotionWrapper';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const ContactInfo = ({ itemVariants }) => {
    return (
        <MotionWrapper variants={itemVariants} className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Other Ways to Connect</h3>
            <div className="space-y-4">
                <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-blue-500/20 mr-4">
                        <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Email</div>
                        <Link href="mailto:support@sdw-ds.com" className="text-white">support@sdw-ds.com</Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-green-500/20 mr-4">
                        <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Phone</div>
                        <Link href={'tel:02036270522'} className="text-white">+44 20 3627 0522</Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-purple-500/20 mr-4">
                        <MessageSquare className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <div className="text-sm text-gray-400">Whatsapp Chat</div>
                        <Link href={'https://wa.me/00447751980423'} className="text-white">+44 7751 980 423</Link>
                    </div>
                </div>
            </div>
        </MotionWrapper>
    )
}

export default ContactInfo