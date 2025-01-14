import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Phone, Mail, X } from 'lucide-react';
import { HomeController } from '../controllers/HomeController';
import { toast, Toaster } from 'react-hot-toast';
import { selectUserId } from '../store/features/user/userSlice';
import { useSelector } from 'react-redux';

interface UserInfo {
    id: string;
    username: string;
    email: string;
    phone_no: string;
}

const HomePage: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const userId = useSelector(selectUserId);

    const homeController = new HomeController();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await homeController.fetchUserDetails(userId);
            if (userInfo) {
                setUserInfo(userInfo);
                setPhone(userInfo.phone_no);
            }
        };

        fetchUserInfo();
    }, [userId]);

    const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const details = {
            phone_no: phone,
            password: password ? password : undefined,
        };

        const updatedUserInfo = await homeController.updateUserDetails(
            userId,
            details
        );
        if (updatedUserInfo) {
            setUserInfo(updatedUserInfo);
            toggleEditModal();
        }
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
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                                <User className="w-6 h-6 text-teal-600 mr-4" />
                                <span className="text-gray-800 text-lg">
                                    {userInfo.username}
                                </span>
                            </div>
                            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                                <Mail className="w-6 h-6 text-teal-600 mr-4" />
                                <span className="text-gray-800 text-lg">
                                    {userInfo.email}
                                </span>
                            </div>
                            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                                <Phone className="w-6 h-6 text-teal-600 mr-4" />
                                <span className="text-gray-800 text-lg">
                                    {userInfo.phone_no}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.button
                    className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors mt-8"
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="*****"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors"
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
            <Toaster />
        </div>
    );
};

export default HomePage;
