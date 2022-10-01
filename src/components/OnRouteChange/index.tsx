import { useModal } from "@faceless-ui/modal";
import { useCustomCursor } from "@root/providers/CustomCursorProvider";
import { Router } from "next/router";
import { useEffect } from "react"

export const OnRouteChange = () => {
  const { closeAllModals } = useModal();
  const { setHighlightCursor, setShowCustomCursor } = useCustomCursor();

  useEffect(() => {
    const routeChangeStart = () => {
      document.documentElement.style.scrollBehavior = 'auto'; // scroll instantly
    };

    const routeChangeComplete = (newRoute: string) => {
      closeAllModals();
      setHighlightCursor(false);
      setShowCustomCursor(newRoute === '/');

      window.scroll({
        top: 0,
        left: 0,
      });

      document.documentElement.style.removeProperty('scroll-behavior');
    }

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeComplete);
    // Router.events.on('hashChangeComplete', hashChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeComplete);
      // Router.events.off('hashChangeComplete', hashChangeComplete);
    }
  }, [
    closeAllModals,
    setHighlightCursor,
    setShowCustomCursor
  ]);

  return null;
}
