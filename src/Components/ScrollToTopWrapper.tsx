
import { useEffect } from "react";

const ScrollToTopWrapper = ({ children }) => {
  // Scroll to top when the component mounts (i.e., when navigating to a new page)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
};

export default ScrollToTopWrapper;
