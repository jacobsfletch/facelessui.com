import React from 'react';
import classes from './index.module.scss';
import { Modal, useModal } from '@faceless-ui/modal';

export const drilldownLvl3Slug = 'drilldown-lvl3';

export const DrilldownLevel3 = () => {
  const { closeModal } = useModal();

  return (
    <Modal
      slug={drilldownLvl3Slug}
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <button
          role="button"
          className={classes.close}
          onClick={() => {
            closeModal(drilldownLvl3Slug);
          }}
        >
          Back
        </button>
        <div className={classes.content}>
          <h2>
            Level 3
          </h2>
        </div>
        <p>
          Hello, world!
        </p>
      </div>
    </Modal>
  )
}
