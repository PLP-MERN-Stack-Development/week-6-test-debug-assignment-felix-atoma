// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Your App Name`;
    return () => {
      document.title = 'Your App Name';
    };
  }, [title]);
};

export default useDocumentTitle;