import { useModal } from "@faceless-ui/modal";
import { useCustomCursor } from "@root/providers/CustomCursorProvider";
import { Router } from "next/router";
import { useEffect } from "react"

export const OnRouteChange = () => {
  const { closeAll } = useModal();
  const { setHighlightCursor, setShowCustomCursor } = useCustomCursor();

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      document.documentElement.style.scrollBehavior = 'auto'; // scroll instantly
    })

    Router.events.on('routeChangeComplete', (newRoute) => {
      closeAll();
      setHighlightCursor(false);
      setShowCustomCursor(newRoute === '/');

      window.scroll({
        top: 0,
        left: 0,
      });

      document.documentElement.style.removeProperty('scroll-behavior');
    });
  }, [
    closeAll,
    setHighlightCursor,
    setShowCustomCursor
  ]);

  return null;
}
