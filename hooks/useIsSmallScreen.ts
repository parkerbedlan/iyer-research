import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const useIsSmallScreen = () => {
  const query = useMediaQuery("(min-width: 48em)");
  const [isLargerThanMid, setIsLargerThanMid] = useState(false);
  useEffect(() => {
    setIsLargerThanMid(!query);
  }, [query]);
  return isLargerThanMid;
};
