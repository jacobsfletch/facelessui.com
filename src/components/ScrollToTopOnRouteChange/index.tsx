import { Router } from "next/router";
import { useEffect } from "react"

export const ScrollToTopOnRouteChange = () => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  return null;
}
