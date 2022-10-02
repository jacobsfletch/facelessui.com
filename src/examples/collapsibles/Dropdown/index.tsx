import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleToggler } from '@faceless-ui/collapsibles';

export const DropdownExample = () => {
  return (
    <Collapsible transTime={250}>
      <CollapsibleToggler>
        Click me
      </CollapsibleToggler>
      <CollapsibleContent>
        Hello, world!
      </CollapsibleContent>
    </Collapsible>
  )
}
