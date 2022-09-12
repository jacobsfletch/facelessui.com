import { LogProps } from "@components/LogProps";
import { useScrollInfo } from "@faceless-ui/scroll-info";

export const LogScrollInfo: React.FC = () => {
  const scrollInfo = useScrollInfo();

  return (
    <LogProps {...scrollInfo} />
  )
}
