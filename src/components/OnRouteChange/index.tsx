import { useModal } from "@faceless-ui/modal";
import { useCustomCursor } from "@root/providers/CustomCursorProvider";
import { Router } from "next/router";
import { useEffect } from "react"

export const OnRouteChange = () => {
  const { closeAll } = useModal();
  const { setHighlightCursor } = useCustomCursor();

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      document.documentElement.style.scrollBehavior = 'auto'; // scroll instantly
    })

    Router.events.on('routeChangeComplete', () => {
      closeAll();

      setHighlightCursor(false);

      window.scroll({
        top: 0,
        left: 0,
      });
      document.documentElement.style.removeProperty('scroll-behavior');
    });
  }, [
    closeAll,
    setHighlightCursor
  ]);

  return null;
}
