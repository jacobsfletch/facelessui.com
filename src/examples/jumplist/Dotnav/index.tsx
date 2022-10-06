import { DotNav, JumplistNode, JumplistProvider } from '@faceless-ui/jumplist';
import React from 'react';
import classes from './index.module.scss';

const nodes = Array.from(Array(3).keys());

export const DotnavJumplistExample = () => {
  return (
    <JumplistProvider>
      <DotNav
        className={classes.dotNav}
        dotClassName={classes.dot}
        activeDotClassName={classes.activeDot}
      />
      {nodes.map((node, index) => {
        return (
          <JumplistNode
            key={index}
            nodeID={index.toString()}
            className={classes.section}
          >
            <h2>
              Section {index + 1}
            </h2>
            <div className={classes.spacer} />
          </JumplistNode>
        )
      })}
    </JumplistProvider>
  )
}
