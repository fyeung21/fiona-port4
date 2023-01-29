import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// For Implementing Auto Scroll To Top When Switching Routes

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    null
  );
};
export default ScrollToTop;