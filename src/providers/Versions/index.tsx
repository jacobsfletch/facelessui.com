import { getAllVersionNumbers } from '@root/npm-api';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
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
  children?: React.ReactChild | ((context: IVersions) => JSX.Element) // eslint-disable-line no-unused-vars
  versions: Versions
}> = (props) => {
  const {
    children,
    versions: versionsFromProps
  } = props;

  const [versions, setVersions] = useState(versionsFromProps || {})

  useEffect(() => {
    const doFetch = async () => {
      const allVersions = await getAllVersionNumbers();
      setVersions(allVersions);
    }
    doFetch();
  }, [])

  const context = {
    versions
  }

  return (
    <VersionsContext.Provider value={context} >
      {typeof children === 'function' ? children(context) : children}
    </VersionsContext.Provider>
  );
};

export default VersionsProvider;
