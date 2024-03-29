import React, { useCallback } from 'react';
import { useDarkMode } from '@root/providers/DarkMode';
import classes from './index.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark';
// import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light';
import { copyToClipboard } from '@root/utilities/copyToClipboard';
import { useNotifications } from '@root/providers/Notifications';
import { CopyIcon } from '@root/icons/Copy';

export const CodeBlock: React.FC<{
  children?: React.ReactNode
}> = (props) => {
  const {
    children,
  } = props;

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
        className={classes.pre}
        codeTagProps={{
          className: classes.code
        }}
      >
        {children}
      </SyntaxHighlighter>
      <div
        className={classes.icon}
        onClick={() => {
          if (children && typeof children === 'string') {
            copyToClipboard(children, onCopy);
          }
        }}
      >
        <CopyIcon color={isDark ? 'white' : 'black'} />
      </div>
    </div>
  )
}
