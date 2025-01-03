import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Phone, Mail, X } from 'lucide-react';

interface UserInfo {
    username: string;
    email: string;
    phone: string;
}

export default function HomePage() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            // Replace this with an actual API call in a real application
            const mockUserInfo: UserInfo = {
                username: 'John Doe',
                email: 'john.doe@example.com',
                phone: '+1 (555) 123-4567',
            };
            setUserInfo(mockUserInfo);
        };

        fetchUserInfo();
    }, []);

    const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        // You would typically send this data to your backend
        toggleEditModal();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white flex items-center justify-center px-4">
            <motion.div
                className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a
                    href="/"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </a>
                <h2 className="text-3xl font-bold text-center mb-6">
                    Your Profile
                </h2>
                <AnimatePresence>
                    {userInfo && (
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                                <User className="w-5 h-5 text-teal-600 mr-3" />
                                <span className="text-gray-800">
                                    {userInfo.username}
                                </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                                <Mail className="w-5 h-5 text-teal-600 mr-3" />
                                <span className="text-gray-800">
                                    {userInfo.email}
                                </span>
                            </div>
                            <div className="flex items-center p-3 bg-gray-100 rounded-lg">
                                <Phone className="w-5 h-5 text-teal-600 mr-3" />
                                <span className="text-gray-800">
                                    {userInfo.phone}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.button
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleEditModal}
                >
                    Edit Profile
                </motion.button>
            </motion.div>

            <AnimatePresence>
                {isEditModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Edit Profile
                                </h2>
                                <button
                                    onClick={toggleEditModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        defaultValue={userInfo?.username}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        defaultValue={userInfo?.email}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        defaultValue={userInfo?.phone}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Save Changes
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
