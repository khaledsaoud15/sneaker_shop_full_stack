import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false); // State to track hover
  const cursorRef = useRef(null); // Ref for the cursor element

  useEffect(() => {
    // Mousemove handler to update the cursor's position
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Smoothly move the cursor using GSAP
      gsap.to(cursorRef.current, {
        x: clientX - 15, // Center the circle
        y: clientY - 15, // Center the circle
        duration: 0.2, // Smooth movement
        ease: "power2.out",
      });

      // Detect if the cursor is over an interactive element
      const element = document.elementFromPoint(clientX, clientY);

      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setIsHovering(computedStyle.cursor === "pointer"); // Check if the cursor style is `pointer`
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate hover effect using GSAP
  useEffect(() => {
    if (cursorRef.current) {
      if (isHovering) {
        gsap.to(cursorRef.current, {
          background: "transparent", // Make background transparent
          border: "2px solid #565656", // Add a border
          duration: 0.2,
          ease: "power2.out",
          width: "35px",
          height: "35px",
        });
      } else {
        gsap.to(cursorRef.current, {
          background: "radial-gradient(circle, #c1c1c1, #f3f3f3)", // Restore gradient background
          border: "none", // Remove border
          duration: 0.2,
          ease: "power2.out",
          width: "20px",
          height: "20px",
        });
      }
    }
  }, [isHovering]);

  return (
    <>
      {/* Cursor element */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #c1c1c1, #565656)", // Default background
        }}
      />
    </>
  );
};

export default CursorFollower;
