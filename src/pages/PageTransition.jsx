import React, { useState } from "react";
import "../styles/PageTransition.css";

const PageTransition = ({ children, onBackToTop }) => {
  const [animate, setAnimate] = useState(false);

  const handleBackToTopWithAnimation = () => {
    setAnimate(true); // Trigger animation
    if (onBackToTop) onBackToTop(); // Call the original back-to-top function
    setTimeout(() => setAnimate(false), 800); // Reset animation state after duration
  };

  return (
    <div className={`page-transition ${animate ? "fade" : ""}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { onBackToTop: handleBackToTopWithAnimation })
          : child
      )}
    </div>
  );
};

export default PageTransition;