// src/hooks/useIntersectionObserver.js
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options);

    return () => {
      observer.current.disconnect();
    };
  }, [callback, options]);

  const observe = (element) => {
    if (element) {
      observer.current.observe(element);
    }
  };

  return observe;
};

export default useIntersectionObserver;
