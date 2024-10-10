import { useEffect } from "react";

export const useDebounce = (func) => {
  let timeout;
  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, [1000]);
  };
};
