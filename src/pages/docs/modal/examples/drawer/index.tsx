import React, { Fragment } from 'react';
import { Doc } from '@root/layout/Doc';
import Margin from '@components/Margin';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { Hyperlink } from '@components/Hyperlink';

const modalSlug = 'modal-drawer';

const ModalDrawerExample = () => {
  return (
    <Fragment>
      <h1>
        Drawer Modal Example
      </h1>
      <Margin bottom="xs">
        {'This is a "drawer" that slides in from the viewport-right. Click on the button to see the effect.'}
      </Margin>
      <Margin bottom="xs">
        <ModalToggler slug={modalSlug}>
          Open drawer
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
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/examples/drawer/index.tsx`}
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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/examples/drawer/index.tsx`}
      metaTitle="Drawer modal example"
      metaDescription="Drawer modal package."
    />
  )
};

ModalDrawerExample.Layout = DocLayout;

export default ModalDrawerExample;
