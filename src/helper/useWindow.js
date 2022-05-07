import { useState, useEffect } from 'react';

export default function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
}
