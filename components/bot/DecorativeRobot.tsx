"use client";

import React from "react";
import { CodingRobot3D } from "./CodingRobot3D";

export const DecorativeRobot = () => {
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
