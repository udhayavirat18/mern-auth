import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from "../store/authStore";

// Updated Input component with pastel color theme
const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className='relative mb-6'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <Icon className='size-5 text-purple-400' />
      </div>
      <input
        {...props}
        className='w-full pl-10 pr-3 py-2 bg-white bg-opacity-20 rounded-lg border border-purple-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 text-gray-800 placeholder-purple-500 transition duration-200 backdrop-blur-md'
      />
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading, error} = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white bg-opacity-30 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-indigo-400 to-fuchsia-400 text-transparent bg-clip-text'>
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='flex items-center mb-6'>
            <Link
              to='/forgot-password'
              className='text-sm text-fuchsia-500 hover:underline'
            >
              Forgot password?
            </Link>
          </div>
          {error && <p className='text-red-500 text-semibold mb-2'>{error}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full py-3 px-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-500 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-purple-100 transition duration-200'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='w-6 h-6 animate-spin mx-auto' /> : 'Login'}
          </motion.button>
        </form>
      </div>

      <div className='px-8 py-4 bg-white bg-opacity-20 flex justify-center backdrop-blur-md'>
        <p className='text-sm text-gray-700'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-purple-500 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
