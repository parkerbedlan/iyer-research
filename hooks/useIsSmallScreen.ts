import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const useIsSmallScreen = () => {
  const query = useMediaQuery("(min-width: 640px)");
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useEffect(() => {
    setIsSmallScreen(!query);
  }, [query]);
  return isSmallScreen;
};
