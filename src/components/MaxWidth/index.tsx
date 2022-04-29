import React from 'react';

export const MaxWidth: React.FC<{
  children?: React.ReactNode
}> = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  )
}
