import { useDarkMode } from '@root/providers/DarkMode';
import React, { useCallback } from 'react';
import classes from './index.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { copyToClipboard } from '@root/utilities/copyToClipboard';
import { useNotifications } from '@root/providers/Notifications';
import { CopyIcon } from '@root/icons/Copy';

export const CodeBlock: React.FC<{
  children: string
}> = (props) => {
  const { children } = props;
  const { isDark } = useDarkMode();

  const { setNotification } = useNotifications();

  const onCopy = useCallback(() => {
    setNotification({
      id: 'copied',
      message: 'Copied to clipboard!'
    })
  }, [setNotification])

  return (
    <div className={classes.codeBlock}>
      <SyntaxHighlighter
        language="javascript"
        style={isDark ? vscDarkPlus : vs}
        className={[
          classes.pre,
          isDark && classes.darkMode
        ].filter(Boolean).join(' ')}
        wrapLongLines
        codeTagProps={{
          className: classes.code
        }}
      >
        {children}
      </SyntaxHighlighter>
      <div
        className={classes.icon}
        onClick={() => {
          if (children) {
            copyToClipboard(children, onCopy);
          }
        }}
      >
        <CopyIcon color="white" />
      </div>
    </div>
  )
}
