import { useModal } from "@faceless-ui/modal";
import { Router } from "next/router";
import { useEffect } from "react"

export const CloseModalOnRouteChange = () => {
  const { closeAll } = useModal();
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      closeAll();
    });
  }, [closeAll]);

  return null;
}
