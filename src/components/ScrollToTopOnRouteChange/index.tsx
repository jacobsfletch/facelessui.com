import { Router } from "next/router";
import { useEffect } from "react"

export const ScrollToTopOnRouteChange = () => {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      document.documentElement.style.scrollBehavior = 'auto'; // scroll instantly
    })

    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
      });
      document.documentElement.style.removeProperty('scroll-behavior');
    });
  }, []);

  return null;
}
