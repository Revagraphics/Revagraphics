import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AutoScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      // 🔥 correct way
      window.lenis.scrollTo(0, {
        duration: 0, // instant jump (no lag)
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
