import React, {
  createContext,
  useContext,
} from 'react';

export type Versions = {
  [key: string]: string
}

interface IVersions {
  versions: Versions
}

export const VersionsContext = createContext<IVersions>({} as IVersions);
export const useVersions = (): IVersions => useContext(VersionsContext);

const VersionsProvider: React.FC<{
  children?: React.ReactChild | ((context: IVersions) => JSX.Element)
  versions: Versions
}> = (props) => {
  const {
    children,
    versions
  } = props;

  const context = { versions };

  return (
    <VersionsContext.Provider value={context} >
      {typeof children === 'function' ? children(context) : children}
    </VersionsContext.Provider>
  );
};

export default VersionsProvider;
