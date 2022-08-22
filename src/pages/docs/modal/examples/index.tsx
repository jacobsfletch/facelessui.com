import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';

const ModalExamples = () => {
  return (
    <Fragment>
      <h1>
        Modal Examples
      </h1>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/examples.tsx`}
      metaTitle="Modal examples"
      metaDescription="The Modal package examples."
    />
  )
};

ModalExamples.Layout = DocLayout;

export default ModalExamples;
