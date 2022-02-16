import React from 'react';
import classes from './index.module.scss';

export const StyledList: React.FC<{
  items: React.ReactElement[]
}> = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((Item, index) => {
        return (
          <li
            key={index}
            className={classes.item}
          >
            {Item}
          </li>
        )
      })}
    </ul>
  )
}
