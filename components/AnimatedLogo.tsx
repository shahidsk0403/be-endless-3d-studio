import React from 'react';

const AnimatedLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`animated-logo-wrapper ${className}`}>
            <style>{`
                .animated-logo-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: visible;
                    background: transparent;
                    gap: 12px;
                }

                .animated-logo-wrapper svg {
                    width: auto;
                    height: 100%;
                    filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.1));
                }

                .logo-text-side {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-weight: bold;
                    font-size: 20px;
                    color: #000000;
                    opacity: 0;
                    animation: fadeIn 1s ease-in 4s forwards;
                    white-space: nowrap;
                }

                /* Background circle */
                .bg-circle {
                    fill: transparent;
                }

                /* Outer white circle - draws first */
                .outer-circle {
                    stroke: #000000;
                    stroke-width: 8;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    animation: drawCircle 2s ease-in-out forwards;
                }

                /* Inner gold circle - draws second */
                .inner-circle {
                    stroke: #d4af37;
                    stroke-width: 3;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    animation: drawCircle 2s ease-in-out 0.8s forwards;
                    opacity: 0;
                }

                /* Decorative circle inside gold ring */
                .decorative-circle {
                    stroke: #d4af37;
                    stroke-width: 2;
                    fill: none;
                    animation: drawCircle 1.5s ease-in-out 1.2s forwards;
                    opacity: 0;
                }

                /* 3D Printer base frame */
                .printer-base {
                    stroke: #000000;
                    stroke-width: 2.5;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    animation: drawPath 2.5s ease-in-out 1.6s forwards;
                    opacity: 0;
                }

                /* Printer internal details */
                .printer-detail {
                    stroke: #000000;
                    stroke-width: 2;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    animation: drawPath 2s ease-in-out 2.2s forwards;
                    opacity: 0;
                }

                /* Printer nozzle/extruder */
                .printer-nozzle {
                    stroke: #d4af37;
                    stroke-width: 2;
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    animation: drawPath 1.5s ease-in-out 2.8s forwards;
                    opacity: 0;
                }

                /* Text animations */
                .text-top {
                    font-size: 42px;
                    font-weight: bold;
                    letter-spacing: 8px;
                    fill: #d4af37;
                    animation: fadeIn 1s ease-in 3.5s forwards;
                    opacity: 0;
                    font-family: 'Georgia', serif;
                }

                .text-bottom {
                    font-size: 18px;
                    letter-spacing: 4px;
                    fill: #d4af37;
                    animation: fadeIn 1s ease-in 4s forwards;
                    opacity: 0;
                    font-family: 'Georgia', serif;
                    font-weight: 500;
                }

                /* Keyframe animations */
                @keyframes drawCircle {
                    to {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }

                @keyframes drawPath {
                    to {
                        stroke-dashoffset: 0;
                        opacity: 1;
                    }
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            `}</style>

            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="top-curve" d="M 90, 250 A 160 160 0 1 1 410 250" fill="transparent" />
                    <path id="bottom-curve" d="M 65, 250 A 185 185 0 0 0 435 250" fill="transparent" />
                </defs>

                <circle className="bg-circle" cx="250" cy="250" r="245" />

                <circle
                    className="outer-circle"
                    cx="250"
                    cy="250"
                    r="240"
                    style={{ strokeDasharray: 1508, strokeDashoffset: 1508 }}
                />

                <circle
                    className="inner-circle"
                    cx="250"
                    cy="250"
                    r="215"
                    style={{ strokeDasharray: 1351, strokeDashoffset: 1351 }}
                />

                <circle
                    className="decorative-circle"
                    cx="250"
                    cy="250"
                    r="200"
                    style={{ strokeDasharray: 1257, strokeDashoffset: 1257 }}
                />

                <rect
                    className="printer-base"
                    x="185"
                    y="150"
                    width="130"
                    height="140"
                    rx="4"
                    style={{ strokeDasharray: 540, strokeDashoffset: 540 }}
                />

                <line
                    className="printer-detail"
                    x1="185"
                    y1="165"
                    x2="315"
                    y2="165"
                    style={{ strokeDasharray: 130, strokeDashoffset: 130 }}
                />

                <rect
                    className="printer-detail"
                    x="200"
                    y="240"
                    width="100"
                    height="8"
                    style={{ strokeDasharray: 216, strokeDashoffset: 216 }}
                />

                <line
                    className="printer-detail"
                    x1="195"
                    y1="170"
                    x2="195"
                    y2="240"
                    style={{ strokeDasharray: 70, strokeDashoffset: 70 }}
                />

                <line
                    className="printer-detail"
                    x1="305"
                    y1="170"
                    x2="305"
                    y2="240"
                    style={{ strokeDasharray: 70, strokeDashoffset: 70 }}
                />

                <line
                    className="printer-detail"
                    x1="250"
                    y1="170"
                    x2="250"
                    y2="240"
                    style={{ strokeDasharray: 70, strokeDashoffset: 70 }}
                />

                <rect
                    className="printer-nozzle"
                    x="230"
                    y="130"
                    width="40"
                    height="35"
                    rx="2"
                    style={{ strokeDasharray: 150, strokeDashoffset: 150 }}
                />

                <circle
                    className="printer-nozzle"
                    cx="250"
                    cy="168"
                    r="5"
                    style={{ strokeDasharray: 31, strokeDashoffset: 31 }}
                />

                <line
                    className="printer-nozzle"
                    x1="245"
                    y1="140"
                    x2="255"
                    y2="140"
                    style={{ strokeDasharray: 10, strokeDashoffset: 10 }}
                />

                <circle
                    className="printer-detail"
                    cx="210"
                    cy="290"
                    r="4"
                    style={{ strokeDasharray: 25, strokeDashoffset: 25 }}
                />
                <circle
                    className="printer-detail"
                    cx="290"
                    cy="290"
                    r="4"
                    style={{ strokeDasharray: 25, strokeDashoffset: 25 }}
                />

                <rect
                    className="printer-detail"
                    x="210"
                    y="300"
                    width="80"
                    height="25"
                    rx="3"
                    style={{ strokeDasharray: 210, strokeDashoffset: 210 }}
                />

                <text className="text-top" dy="10">
                    <textPath href="#top-curve" startOffset="50%" textAnchor="middle">
                        BE ENDLESS
                    </textPath>
                </text>

                <text className="text-bottom" dy="-5">
                    <textPath href="#bottom-curve" startOffset="50%" textAnchor="middle">
                        3D PRINTING STUDIO
                    </textPath>
                </text>
            </svg>

            <span className="logo-text-side">
                3D PRINTING STUDIO
            </span>
        </div>
    );
};

export default AnimatedLogo;
