import { Hyperlink } from "@components/Hyperlink";
import { InlineCode } from "@components/InlineCode";
import React, { Fragment } from "react";

export const BasicContext: React.FC<{
  href?: string
}> = (props) => {
  const {
    href = '#provider-props',
  } = props;

  return (
    <Fragment>
      <InlineCode>
        ...settings
      </InlineCode>
      <p>
        {'All '}
        <Hyperlink href={href}>
          settings
        </Hyperlink>
        {' are spread into the context.'}
      </p>
    </Fragment>
  )
}
