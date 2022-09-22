import React from 'react';
import { ModalContainer as FacelessModalContainer } from '@faceless-ui/modal';
import classes from './index.module.scss'

export const ModalContainer = () => {
  return (
    <FacelessModalContainer
      className={classes.modalContainer}
    />
  )
}
