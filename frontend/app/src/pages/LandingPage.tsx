import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white text-gray-900">
            <header className="container mx-auto px-4 py-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-teal-600">M-TREAT</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="/auth"
                                className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
                            >
                                Sign In
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-20 text-center">
                    <motion.h2
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Your Health, At Your Fingertips
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        M-TREAT brings professional healthcare to your home with
                        our innovative e-health solutions.
                    </motion.p>
                    <motion.div
                        className="flex justify-center space-x-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href="/auth"
                            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors"
                        >
                            Get Started
                        </a>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
