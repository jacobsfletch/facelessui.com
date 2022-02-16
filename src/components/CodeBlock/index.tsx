import { useDarkMode } from '@root/providers/DarkMode';
import React from 'react';
import classes from './index.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock: React.FC = (props) => {
  const { children } = props;
  const { isDark } = useDarkMode();

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
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
  )
}
