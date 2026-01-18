import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Immediate update for the dot
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    const onMouseDown = () => {
      if (follower) follower.classList.add("expand");
    };

    const onMouseUp = () => {
      if (follower) follower.classList.remove("expand");
    };

    // Smooth animation loop for the follower
    const loop = () => {
      posX += (mouseX - posX) * 0.1; // Smooth lerp
      posY += (mouseY - posY) * 0.1;

      if (follower) {
        follower.style.left = `${posX}px`;
        follower.style.top = `${posY}px`;
      }
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    
    // Hide cursor when leaving window
    document.addEventListener("mouseout", () => setIsVisible(false));
    document.addEventListener("mouseover", () => setIsVisible(true));

    loop();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseout", () => setIsVisible(false));
      document.removeEventListener("mouseover", () => setIsVisible(true));
    };
  }, [isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    const links = document.querySelectorAll('a, button, .clickable');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => followerRef.current?.classList.add('hovered'));
      link.addEventListener('mouseleave', () => followerRef.current?.classList.remove('hovered'));
    });
    return () => document.body.style.cursor = 'auto';
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor-dot"></div>
      <div ref={followerRef} className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
