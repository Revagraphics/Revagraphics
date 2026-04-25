import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AutoScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (globalThis.lenis) {
      globalThis.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}