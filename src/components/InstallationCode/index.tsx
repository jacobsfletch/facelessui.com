import { CopyIcon } from '@root/icons/Copy';
import { useNotifications } from '@root/providers/Notifications';
import { copyToClipboard } from '@root/utilities/copyToClipboard';
import React, { useCallback, useEffect, useState } from 'react';
import classes from './index.module.scss';

export const InstallationCode: React.FC<{
  name?: string
}> = (props) => {
  const { name } = props;
  const [manager, setManager] = useState<'npm' | 'yarn'>('yarn');

  let command = `npm i @faceless-ui/${name}`;
  if (manager === 'yarn') command = `yarn add @faceless-ui/${name}`

  const { setNotification } = useNotifications();

  const onCopy = useCallback(() => {
    setNotification({
      id: 'copied',
      message: 'Copied to clipboard!'
    })
  }, [setNotification])

  useEffect(() => {
    const preferredPkgManager = localStorage.getItem('preferredPkgManager');
    if (preferredPkgManager === 'npm') setManager('npm')
    if (preferredPkgManager === 'yarn') setManager('yarn')
  }, [])

  useEffect(() => {
    if (manager) {
      localStorage.setItem('preferredPkgManager', manager);
    }
  }, [manager])

  return (
    <div className={classes.installationCode} >
      <div
        className={classes.codeBlockWrapper}
        onClick={() => {
          copyToClipboard(command, onCopy);
        }}
      >
        <div className={classes.codeBlock}        >
          <pre className={classes.pre}>
            <code className={classes.code}>
              {command}
            </code>
          </pre>
        </div>
        <div className={classes.icon}>
          <CopyIcon color="white" />
        </div>
      </div>
      <div className={classes.managerSwitch}>
        {manager === 'npm' && (
          <button
            className={classes.managerButton}
            onClick={() => {
              setManager('yarn');
            }}
          >
            I use yarn
          </button>
        )}
        {manager === 'yarn' && (
          <button
            className={classes.managerButton}
            onClick={() => {
              setManager('npm');
            }}
          >
            I use npm
          </button>
        )}
      </div>
    </div>
  )
}
