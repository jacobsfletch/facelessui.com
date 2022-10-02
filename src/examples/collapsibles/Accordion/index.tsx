import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleGroup, CollapsibleToggler } from '@faceless-ui/collapsibles';

export const AccordionExample = () => {
  return (
    <CollapsibleGroup transTime={250}>
      <Collapsible openOnInit>
        <CollapsibleToggler>
          Item 1
        </CollapsibleToggler>
        <CollapsibleContent>
          Content 1
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleToggler>
          Item 2
        </CollapsibleToggler>
        <CollapsibleContent>
          Content 2
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleToggler>
          Item 3
        </CollapsibleToggler>
        <CollapsibleContent>
          Content 3
        </CollapsibleContent>
      </Collapsible>
    </CollapsibleGroup>
  )
}
