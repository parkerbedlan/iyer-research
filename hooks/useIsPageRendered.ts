import { useEffect, useState } from "react";

export const useIsPageRendered = () => {
  const [isPageRendered, setIsPageRendered] = useState(false);
  useEffect(() => {
    setIsPageRendered(true);
  }, []);
  return isPageRendered;
};
