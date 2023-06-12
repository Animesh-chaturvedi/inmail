import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { mailsStateVal } from "../mailState";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const StoreState = useSelector(mailsStateVal);
  useEffect(() => {
    if(StoreState.isError){
      setHasError(true)
    }
  },[StoreState])

  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      setHasError(true);
    };
    window.addEventListener('error', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
