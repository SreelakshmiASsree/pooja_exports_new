"use client";
import React from "react";
type Props = {
  size?: number;          
  color?: string;         
  message?: string;       
  className?: string;
};

export default function Initialloader({
  size = 64,
  color = "currentColor",
  message,
  className = "",
}: Props) {
  const s = Math.max(32, size); 
  const unit = s / 64; 

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        style={{ width: s, height: s }}
        className="relative"
        aria-hidden="true"
      >
        {/* Four diamond pieces */}
        <div
          style={{
            background: color,
            width: 14 * unit,
            height: 14 * unit,
            transform: "rotate(45deg)",
            top: 0,
            left: "50%",
            marginLeft: -(7 * unit),
            animationDelay: "0s",
          }}
          className="absolute rounded-sm animate-diamondPulse"
        />
        <div
          style={{
            background: color,
            width: 14 * unit,
            height: 14 * unit,
            transform: "rotate(45deg)",
            left: "100%",
            top: "50%",
            marginTop: -(7 * unit),
            marginLeft: -(14 * unit),
            animationDelay: "0.12s",
          }}
          className="absolute rounded-sm animate-diamondPulse"
        />
        <div
          style={{
            background: color,
            width: 14 * unit,
            height: 14 * unit,
            transform: "rotate(45deg)",
            left: "50%",
            top: "100%",
            marginLeft: -(7 * unit),
            marginTop: -(14 * unit),
            animationDelay: "0.24s",
          }}
          className="absolute rounded-sm animate-diamondPulse"
        />
        <div
          style={{
            background: color,
            width: 14 * unit,
            height: 14 * unit,
            transform: "rotate(45deg)",
            left: 0,
            top: "50%",
            marginTop: -(7 * unit),
            animationDelay: "0.36s",
          }}
          className="absolute rounded-sm animate-diamondPulse"
        />
      </div>

      {message ? (
        <span className="mt-3 text-sm text-center" style={{ color }}>
          {message}
        </span>
      ) : null}

      {/* Inline styles for animation (styled-jsx) */}
      <style jsx>{`
        .animate-diamondPulse {
          transform-origin: center;
          opacity: 0.9;
          animation: diamondPulse 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
        }

        @keyframes diamondPulse {
          0% {
            transform: rotate(45deg) scale(1);
            opacity: 0.85;
          }
          40% {
            transform: rotate(45deg) scale(1.25);
            opacity: 1;
          }
          100% {
            transform: rotate(45deg) scale(1);
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
}
