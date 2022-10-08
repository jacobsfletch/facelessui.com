import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { ExploreModal } from './Explore';
import { AboutModal } from './About';

export const megaMenuSlug = 'megaMenuExample';
export const aboutMegaMenuSlug = `${megaMenuSlug}__about`;
export const exploreMegaMenuSlug = `${megaMenuSlug}__explore`;

export const MegaMenuExample = () => {
  return (
    <Fragment>
      <ModalToggler slug={megaMenuSlug}>
        Open mega menu
      </ModalToggler>
      <Modal
        slug={megaMenuSlug}
        className={classes.megaMenuExample}
      >
        <div className={classes.wrapper}>
          <div>
            <ModalToggler
              slug={megaMenuSlug}
              className={classes.close}
            >
              Close
            </ModalToggler>
          </div>
          <ModalToggler
            slug={aboutMegaMenuSlug}
            className={classes.menuItem}
          >
            About
          </ModalToggler>
          <ModalToggler
            slug={exploreMegaMenuSlug}
            className={classes.menuItem}
          >
            Explore
          </ModalToggler>
        </div>
      </Modal>
      <ExploreModal />
      <AboutModal />
    </Fragment>
  )
}
