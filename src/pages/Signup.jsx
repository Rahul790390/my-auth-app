
import React, { useState } from "react";
import { toast } from "react-toastify";
import zxcvbn from "zxcvbn";
import { motion } from "framer-motion";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const strength = zxcvbn(password);

  const handleSignup = (e) => {
    e.preventDefault();
    toast.success("Signup Successful!");
  };

  const strengthLabel = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-indigo-200">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            className="w-full p-2 border rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-sm font-medium">
            Strength:{" "}
            <span className={`text-${["red", "orange", "yellow", "blue", "green"][strength.score]}-600`}>
              {strengthLabel[strength.score]}
            </span>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
