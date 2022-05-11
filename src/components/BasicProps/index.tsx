import { InlineCode } from "@components/InlineCode"
import React from "react";

export const BasicProps: React.FC<{
  defaultElement?: string
}> = (props) => {
  const {
    defaultElement = 'div'
  } = props;

  return (
    <div>
      <InlineCode>
        htmlElement
      </InlineCode>
      <p>
        {`Optional. Customize the HTML element that is rendered in the DOM. Defaults to a ${defaultElement}`}.
      </p>
    </div>
  )
}
