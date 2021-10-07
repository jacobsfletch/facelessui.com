import Margin from '@components/Margin';
import React from 'react'
import classes from './index.module.scss';

export const HorizontalRule: React.FC = () => {
  return (
    <Margin
      bottom="small"
      top="small"
    >
      <hr className={classes.horizontalRule} />
    </Margin>
  )
}
