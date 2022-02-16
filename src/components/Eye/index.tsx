import { useMouseInfo } from '@faceless-ui/mouse-info'
import { Fragment, useEffect, useState } from 'react';
import classes from './index.module.scss';

export const Eye: React.FC = () => {
  const {
    xPercentage,
    yPercentage
  } = useMouseInfo();

  return (
    <div className={classes.eye}>
      <div
        className={classes.retina}
        style={{
          left: `${(xPercentage / 2) + 50}%`,
          top: `${(yPercentage / 2) + 50}%`
        }}
      >
        <div className={classes.pupil} />
      </div>
    </div>
  )
}
