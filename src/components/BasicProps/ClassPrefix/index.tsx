import { PropName } from "@components/PropName";
import React from "react";

export const ClassPrefix: React.FC<{
  id?: string
}> = (props) => {
  const {
    id
  } = props;

  return (
    <div id={id}>
      <PropName
        name="classPrefix"
        type="string"
      />
      <p>
        {`Prepends onto onto every generated class name, useful for unique name-spacing within complex stylesheets.`}
      </p>
    </div>
  )
}
