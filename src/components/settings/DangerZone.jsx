"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const DangerZone = () => {
  return (
    <motion.div
      className="bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center mb-4 space-x-2">
        <Trash2 className="text-red-400 w-6 h-6" />
        <h2 className="text-xl font-semibold text-gray-100">Danger Zone</h2>
      </div>

      <p className="text-gray-300 mb-4">
        Permanently delete your account and all of your content.
      </p>

      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
        Delete Account
      </button>
    </motion.div>
  );
};

export default DangerZone;
