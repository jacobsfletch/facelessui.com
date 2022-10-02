import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const CollapsibleExamples = () => {
  return (
    <Fragment>
      <h1>
        Collapsible Examples
      </h1>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/collapsibles/examples.tsx`}
      metaTitle="Collapsibles Examples"
      metaDescription="Examples of the @faceless-ui/collapsibles npm module."
      metaURL="/docs/collapsibles/examples"
    />
  )
};

CollapsibleExamples.Layout = DocLayout;

export default CollapsibleExamples;
