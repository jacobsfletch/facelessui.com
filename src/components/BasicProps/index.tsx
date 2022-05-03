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
        id
      </InlineCode>
      <p>
        Optional. HTML id attribute.
      </p>
      <InlineCode>
        className
      </InlineCode>
      <p>
        Optional. HTML class attribute. Append your own class onto the element&apos;s existing class list.
      </p>
      <InlineCode>
        htmlElement
      </InlineCode>
      <p>
        {`Optional. Customize the HTML element that is rendered in the DOM. Defaults to a ${defaultElement}`}.
      </p>
      <InlineCode>
        style
      </InlineCode>
      <p>
        Optional. Additional inline CSS to apply to the element.
      </p>
      <InlineCode>
        htmlAttributes
      </InlineCode>
      <p>
        Optional. An object of any other HTML attributes you might need, spread directly onto the HTML element.
      </p>
    </div>
  )
}
