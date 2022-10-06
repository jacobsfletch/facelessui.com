import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';
import { drilldownLvl2Slug, DrilldownLevel2 } from '../Level2';

export const drilldownLvl1Slug = 'drilldown-lvl1';

export const DrilldownLevel1 = () => {
  const { closeModal } = useModal();

  return (
    <Fragment>
      <Modal
        slug={drilldownLvl1Slug}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <button
            role="button"
            className={classes.close}
            onClick={() => {
              closeModal(drilldownLvl1Slug);
            }}
          >
            Close
          </button>
          <div className={classes.content}>
            <h2>
              Level 1
            </h2>
          </div>
          <ModalToggler
            slug={drilldownLvl2Slug}
            className={classes.menuItem}
          >
            {`Open level 2 ▸`}
          </ModalToggler>
        </div>
      </Modal>
      <DrilldownLevel2 />
    </Fragment>
  )
}
