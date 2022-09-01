import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { Hyperlink } from '@components/Hyperlink';

const modalSlug = 'modal-lightbox';

const LightboxModalExample = () => {
  return (
    <Fragment>
      <h1>
        Lightbox Modal Example
      </h1>
      <Margin bottom="xs">
        {'This is a "lightbox" that opens content in a modal with a background overlay. Click on the button to see the effect.'}
      </Margin>
      <Margin bottom="xs">
        <ModalToggler slug={modalSlug}>
          Open lightbox
        </ModalToggler>
        <Modal
          slug={modalSlug}
          className={classes.modal}
        >
          <div className={classes.wrapper}>
            <ModalToggler
              slug={modalSlug}
              className={classes.close}
            >
              Close
            </ModalToggler>
            <div className={classes.content}>
              Hello, world!
            </div>
          </div>
        </Modal>
      </Margin>
      <Hyperlink
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/examples/lightbox/index.tsx`}
        newTab
      >
        Source code
      </Hyperlink>
    </Fragment>
  )
}

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/examples/lightbox/index.tsx`}
      metaTitle="Example Lightbox Modal"
      metaDescription="Example lightbox modal using the @faceless-ui/modal npm module."
      metaURL="/docs/modal/examples/lightbox"
    />
  )
};

LightboxModalExample.Layout = DocLayout;

export default LightboxModalExample;
