import { CodeBlock } from "@components/CodeBlock"

export const LogProps: React.FC<any> = (props) => {
  return (
    <CodeBlock>
      {JSON.stringify(props, undefined, 2)}
    </CodeBlock>
  )
}
