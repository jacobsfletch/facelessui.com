import Meta from '@components/Meta';
import React, { Fragment, useState } from 'react';
import { Doc } from '@root/layout/Doc';
import { LogProps } from '@components/LogProps';
import { Hyperlink } from '@components/Hyperlink';
import { useModal } from '@faceless-ui/modal';

const ModalDoc = () => {
  const modalContext = useModal();

  const [contextToPrint] = useState(() => {
    const withoutRef = modalContext;
    // @ts-ignore
    withoutRef.containerRef = 'ReactRef';
    return withoutRef;
  });

  return (
    <Fragment>
      <Meta
        title="Modal"
      />
      <h1>
        Modal
      </h1>
      <p>
        This component allows your to render modal windows from anywhere within your app.
      </p>
      <div>
        <LogProps {...contextToPrint} />
      </div>
      <Hyperlink
        href="https://modal.faceless-ui.com"
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

ModalDoc.Layout = Doc;

export default ModalDoc;
