import { LogProps } from "@components/LogProps";
import { useMouseInfo } from "@faceless-ui/mouse-info";

export const LogMouseInfo: React.FC = () => {
  const mouseInfo = useMouseInfo();

  return (
    <LogProps {...mouseInfo} />
  )
}
