// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import zxcvbn from 'zxcvbn';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const passwordStrength = zxcvbn(password).score;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === '' || password === '') {
//       toast.error('Please fill all fields');
//       return;
//     }

//     // Example login logic
//     if (email === 'test@example.com' && password === 'password') {
//       toast.success('Login successful!');
//     } else {
//       toast.error('Invalid credentials');
//     }
//   };

//   const strengthColor = ['bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-green-600'];

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 p-4">
//       <motion.div
//         className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {/* Password strength meter */}
//             <div className="flex mt-2 space-x-1">
//               {[0, 1, 2, 3, 4].map((i) => (
//                 <div
//                   key={i}
//                   className={`h-2 flex-1 rounded ${i <= passwordStrength ? strengthColor[passwordStrength] : 'bg-gray-300'}`}
//                 />
//               ))}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
//           >
//             Log In
//             </button>
//           </form>

//         {/* ✅ Signup Link */}
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
//             Signup here
//           </Link>
//         </p>
//       </motion.div>
//       <ToastContainer position="top-center" />
//     </div>
//   );
// };

// export default Login;

// src/pages/Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import zxcvbn from 'zxcvbn';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    toast.success('Logged in successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* ✅ Signup Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-medium hover:underline">
            Signup here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
