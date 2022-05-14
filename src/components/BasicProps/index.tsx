import { InlineCode } from "@components/InlineCode"
import { PropName } from "@components/PropName";
import React from "react";

export const BasicProps: React.FC<{
  defaultElement?: string
}> = (props) => {
  const {
    defaultElement = 'div'
  } = props;

  return (
    <div>
      <PropName
        name="htmlElement"
        type="string"
      />
      <p>
        {`Customize the HTML element that is rendered in the DOM. Defaults to `}
        <InlineCode>
          {defaultElement}
        </InlineCode>
        {'.'}
      </p>
      <InlineCode>
        ...rest
      </InlineCode>
      <p>
        {`All other props are spread onto the DOM element as HTML attributes.`}
      </p>
    </div>
  )
}
