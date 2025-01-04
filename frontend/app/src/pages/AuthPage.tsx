import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react';
import PhoneInputComp from '../components/PhoneInputComp';
import { toast, Toaster } from 'react-hot-toast';
import { AuthController } from '../controllers/AuthController';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const clearFormFields = () => {
        setUsername('');
        setEmail('');
        setPhoneNo('');
        setPassword('');
    };

    const toggleAuthMode = () => setIsSignUp(!isSignUp);

    const authController = new AuthController();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const credentials = {
            username,
            email,
            phone_no: phoneNo,
            password,
        };

        try {
            if (isSignUp) {
                await authController.handleSignUpSubmit(credentials);
                toggleAuthMode();
            } else {
                // await authController.handleSignInSubmit({ email, password });
                navigate('/home'); // Redirect to the home page after successful login
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b  from-teal-100 to-white  flex items-center justify-center px-4">
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
                    {isSignUp ? 'Create an Account' : 'Welcome Back'}
                </h2>
                <AnimatePresence mode="wait">
                    <motion.form
                        key={isSignUp ? 'signup' : 'signin'}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        {isSignUp && (
                            <>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Username
                                    </label>
                                    <div className="relative">
                                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                            placeholder="John Doe"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone_no"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone No.
                                    </label>
                                    <div className="relative">
                                        <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <PhoneInputComp
                                            phoneNo={phoneNo}
                                            setPhoneNo={setPhoneNo}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </motion.button>
                    </motion.form>
                </AnimatePresence>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        {isSignUp
                            ? 'Already have an account?'
                            : "Don't have an account?"}
                        <button
                            onClick={() => {
                                clearFormFields();
                                toggleAuthMode();
                            }}
                            className="ml-1 text-teal-600 hover:text-teal-800 font-medium"
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </motion.div>
            <Toaster />
        </div>
    );
};

export default AuthPage;
