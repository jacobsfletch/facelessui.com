import { InlineCode } from "@components/InlineCode"
import { PropName } from "@components/PropName";
import React from "react";

export const BasicProps: React.FC<{
  defaultElement?: string
  idPrefix?: string
}> = (props) => {
  const {
    defaultElement = 'div',
    idPrefix
  } = props;

  return (
    <div>
      <PropName
        name="htmlElement"
        type="string"
        id={idPrefix ? `${idPrefix}-htmlElement` : undefined}
      />
      <p>
        {`Customize the HTML element that is rendered in the DOM. Defaults to `}
        <InlineCode>
          {defaultElement}
        </InlineCode>
        {'.'}
      </p>
      <PropName
        name="...rest"
        type="object"
      />
      <p>
        {`All other props are spread onto the DOM element as HTML attributes.`}
      </p>
    </div>
  )
}
