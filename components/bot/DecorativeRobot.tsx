"use client";

import React from "react";
import { motion } from "framer-motion";
import { CodingRobot3D } from "./CodingRobot3D";

const Bubble = ({ size, delay, x, y, duration }: { size: number, delay: number, x: string, y: string, duration: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1.2, 0],
            x: ["0%", "20%", "-20%", "0%"],
            y: ["0%", "-50%", "-100%"]
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="absolute bg-indigo-400/30 rounded-full blur-sm"
        style={{
            left: x,
            top: y,
            width: size,
            height: size,
            position: 'absolute'
        }}
    />
);

const DataStream = ({ delay, left }: { delay: number, left: string }) => (
    <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "-100%", opacity: [0, 1, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "linear" }}
        className="absolute w-[1px] h-20 bg-gradient-to-t from-transparent via-indigo-500 to-transparent"
        style={{ left }}
    />
);

export const DecorativeRobot = () => {
    const bubbles = [
        { size: 20, delay: 0, x: "10%", y: "80%", duration: 4 },
        { size: 40, delay: 1, x: "80%", y: "70%", duration: 5 },
        { size: 15, delay: 2, x: "30%", y: "90%", duration: 3 },
        { size: 30, delay: 0.5, x: "70%", y: "85%", duration: 6 },
        { size: 25, delay: 1.5, x: "20%", y: "60%", duration: 4.5 },
        { size: 35, delay: 2.5, x: "85%", y: "50%", duration: 5.5 },
    ];

    const streams = [
        { delay: 0, left: "15%" },
        { delay: 1, left: "45%" },
        { delay: 2, left: "75%" },
        { delay: 0.5, left: "30%" },
        { delay: 1.5, left: "60%" },
    ];

    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-purple-500/10 blur-[80px] rounded-full"></div>

            {/* Central Container for 3D Content (No rotation) */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <CodingRobot3D />
            </div>

            {/* Connecting Lines (Visual flourish - keep it subtle) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[120%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent rotate-45" />
                <div className="w-[120%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -rotate-45" />
            </div>
        </div>
    );
};
