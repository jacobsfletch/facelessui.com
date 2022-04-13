import Meta from '@components/Meta';
import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import { Hyperlink } from '@components/Hyperlink';
import Margin from '@components/Margin';
import { InstallationCode } from '@components/InstallationCode';

const JumplistDoc = () => {
  return (
    <Fragment>
      <Meta
        title="Jumplist"
      />
      <h1>
        Jumplist
      </h1>
      <p>
        Installation
      </p>
      <Margin bottom="xs">
        <InstallationCode name="jumplist" />
      </Margin>
      <p>
        This page has no content.
      </p>
      <Hyperlink
        href="https://jumplist.faceless-ui.com"
        underline
        newTab
      >
        <small>
          Demo in playground
        </small>
      </Hyperlink>
    </Fragment>
  )
}

JumplistDoc.Layout = Doc;

export default JumplistDoc;
