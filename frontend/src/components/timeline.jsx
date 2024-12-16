
import React from 'react';
import { motion } from "framer-motion";

export default function Timeline() {
const items = [
    { title: "Graduation", description: "Expected 2026", date: "June, 2026" },
    { title: "Event 2", description: "Description 2", date: "2022" },
    { title: "Event 3", description: "Description 3", date: "2023" },
    { title: "Event 4", description: "Description 4", date: "2024" },
  ];

  return (
    <div className="relative text-white bg-black h-64 font-mono">
     <motion.div
        className="absolute flex items-center"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 p-5 bg-white  border border-blue border-2 rounded-md w-64"
          >
            <h3 className="font-bold text-blue">{item.title}</h3>
            <p className="text-black">{item.description}</p>
            <p className="text-black">{item.date}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}