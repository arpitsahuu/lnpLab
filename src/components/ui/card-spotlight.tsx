"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/util";

export const CardSpotlight = ({
    children,
    radius = 350,
    color = "#262626",
    className,
    i,
    ...props
}: {
    radius?: number;
    color?: string;
    i: number;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div
            className={cn(
                "group/spotlight p-10 relative bg-black border-none",
                "hover:z-10 transition-transform transform hover:scale-105",
                className
            )}
            style={{
                borderRadius: "27px 79px 27px 28px", // Apply custom border-radius
                WebkitBorderRadius: "27px 79px 27px 28px", // For older browsers
                MozBorderRadius: "27px 79px 27px 28px", // For Firefox
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Custom SVG Border */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {i == 0 &&
                    <svg
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 384 366"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            vectorEffect="non-scaling-stroke"
                            d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
                            stroke="white"
                            strokeOpacity="0.15"
                            strokeWidth="2"
                        />
                        <path
                            vectorEffect="non-scaling-stroke"
                            d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
                            stroke="url(#paint0_linear_333_9188)"
                            strokeOpacity="0.85"
                            strokeWidth="2"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_333_9188"
                                x1="192"
                                y1="0"
                                x2="192"
                                y2="366"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#33CEFF" />
                                <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                }
                {i == 1 &&
                    <svg
                        preserveAspectRatio="none" 
                        width="100%"
                        height="100%"
                        viewBox="0 0 384 366" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg
                    ">
                        <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2" />
                        <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(#paint0_linear_333_9186)" stroke-opacity="0.85" stroke-width="2" />
                        <defs>
                            <linearGradient id="paint0_linear_333_9186" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFC876" />
                                <stop offset="0.562842" stop-color="#D633FF" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                } 
                {i == 2 &&
                    <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 384 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/>
                    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(#paint0_linear_333_9185)" stroke-opacity="0.85" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_333_9185" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D77DEE"/>
                    <stop offset="0.562842" stop-color="#D633FF" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    
                }
                <motion.div
                    className="pointer-events-none absolute z-0 -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                    style={{
                        backgroundColor: color,
                        borderRadius: "35px 90px 35px 35px", // Apply custom border-radius
                        WebkitBorderRadius: "35px 90px 35px 35px", // For older browsers
                        MozBorderRadius: "35px 90px 35px 35px", // For Firefox
                        maskImage: useMotionTemplate`
              radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                white,
                transparent 80%
              )
            `,
                    }}
                >
                    {isHovering && (
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            dotSize={3}
                        />
                    )}
                </motion.div>
            </div>
            <div className="z-20 relative">{children}</div>
        </div>
    );
};
