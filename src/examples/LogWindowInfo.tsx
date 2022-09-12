import { LogProps } from "@components/LogProps";
import { useWindowInfo } from "@faceless-ui/window-info";

export const LogWindowInfo: React.FC = () => {
  const windowInfo = useWindowInfo();

  return (
    <LogProps {...windowInfo} />
  )
}
