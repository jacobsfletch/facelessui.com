import { InlineCode } from '@components/InlineCode';
import React, { Fragment } from 'react';
import classes from './index.module.scss';

export const PropName: React.FC<{
  name?: string
  type?: 'string' | 'boolean' | 'number' | 'object' | 'array' | 'method' | 'boolean or function'
  id?: string
  required?: boolean
  isContextProp?: boolean
}> = (props) => {
  const {
    name,
    type,
    id,
    required,
    isContextProp
  } = props;

  return (
    <div
      className={classes.propName}
      id={id || name}
    >
      <InlineCode>
        {`${name}${required ? '*' : ''}`}
      </InlineCode>
      {type && (
        <div className={classes.propType}>
          &nbsp;
          :
          &nbsp;
          {type}
        </div>
      )}
      {!isContextProp && (
        <Fragment>
          &nbsp;
          |
          &nbsp;
          {required ? 'required' : 'optional'}
        </Fragment>
      )}
    </div>
  )
}
