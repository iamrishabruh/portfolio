import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Scroll.css';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Change this value to scroll higher
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    isVisible && (
      <div
        className='scroll-top'
        onClick={scrollToTop}
        role='button'
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
      >
        <ArrowUpwardIcon fontSize='large' />
      </div>
    )
  );
};

export default Scroll;