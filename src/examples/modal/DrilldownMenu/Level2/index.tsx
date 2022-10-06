import React, { Fragment } from 'react';
import classes from './index.module.scss';
import { Modal, ModalToggler, useModal } from '@faceless-ui/modal';
import { DrilldownLevel3, drilldownLvl3Slug } from '../Level3';

export const drilldownLvl2Slug = 'drilldown-lvl2';

export const DrilldownLevel2 = () => {
  const { closeModal } = useModal();

  return (
    <Fragment>
      <Modal
        slug={drilldownLvl2Slug}
        className={classes.modal}
      >
        <div className={classes.wrapper}>
          <button
            role="button"
            className={classes.close}
            onClick={() => {
              closeModal(drilldownLvl2Slug);
            }}
          >
            Back
          </button>
          <div className={classes.content}>
            <h2>
              Level 2
            </h2>
          </div>
          <ModalToggler
            slug={drilldownLvl3Slug}
            className={classes.menuItem}
          >
            {`Open level 3 ▸`}
          </ModalToggler>
        </div>
      </Modal>
      <DrilldownLevel3 />
    </Fragment>
  )
}
