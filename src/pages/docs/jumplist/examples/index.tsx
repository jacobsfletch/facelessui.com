import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const JumplistExamples = () => {
  return (
    <Fragment>
      <h1>
        Jumplist Examples
      </h1>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/jumplist/examples.tsx`}
      metaTitle="Jumplist Examples"
      metaDescription="Examples of the @faceless-ui/jumplist npm module."
      metaURL="/docs/jumplist/examples"
    />
  )
};

JumplistExamples.Layout = DocLayout;

export default JumplistExamples;
