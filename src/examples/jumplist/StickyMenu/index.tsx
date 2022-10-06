import { JumplistButton, JumplistNode, JumplistProvider, useJumplist } from '@faceless-ui/jumplist';
import React from 'react';
import classes from './index.module.scss';

const nodes = [
  {
    label: 'Section 1',
    nodeID: '1'
  },
  {
    label: 'Section 2',
    nodeID: '2'
  },
  {
    label: 'Section 3',
    nodeID: '3'
  }
]

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { jumplist } = useJumplist();

  const allIntersecting = jumplist.filter(node => node.isIntersecting);
  const lastIntersecting = allIntersecting?.[allIntersecting.length - 1];
  const lastIntersectingNode = nodes.find(({ nodeID }) => nodeID === lastIntersecting?.nodeID);

  return (
    <div className={classes.menuContainer}>
      <div className={classes.navHeader}>
        <button
          className={classes.navToggler}
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className={classes.togglerText}>
            {lastIntersectingNode?.label || 'Table of Contents'}
          </div>
          <div className={classes.togglerIcon}>
            {`${isOpen ? '▲' : '▼'}`}
          </div>
        </button>
      </div>
      {isOpen && (
        <menu className={classes.menu}>
          {nodes.map((node, index) => {
            return (
              <JumplistButton
                key={index}
                nodeID={node.nodeID}
                activeClassName={classes.navItemActive}
                className={classes.navItem}
              >
                {node.label}
              </JumplistButton>
            )
          })}
        </menu>
      )}
    </div>
  )
}

export const StickyMenuExample = () => {
  return (
    <JumplistProvider>
      <Menu />
      {nodes.map((node, index) => {
        return (
          <JumplistNode
            key={index}
            nodeID={node.nodeID}
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
