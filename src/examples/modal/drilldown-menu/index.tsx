import React, { Fragment } from 'react';
import { ModalToggler } from '@faceless-ui/modal';
import { DrilldownLevel1, drilldownLvl1Slug } from './Level1';

export const DrilldownMenuExample = () => {
  return (
    <Fragment>
      <ModalToggler slug={drilldownLvl1Slug}>
        Open drilldown menu
      </ModalToggler>
      <DrilldownLevel1 />
    </Fragment>
  )
}
