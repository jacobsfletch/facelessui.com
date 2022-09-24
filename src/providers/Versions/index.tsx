import { getAllGitHubReleases, GitHubRelease } from '@root/github-api';
import { getAllNPMReleases, NPMDocument } from '@root/npm-api';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type NPMVersions = {
  [key: string]: NPMDocument | undefined
}

export type GithubVersions = {
  [key: string]: GitHubRelease | undefined
}

interface IVersions {
  npmVersions: NPMVersions
  githubVersions: GithubVersions
}

export const VersionsContext = createContext<IVersions>({} as IVersions);
export const useVersions = (): IVersions => useContext(VersionsContext);

const VersionsProvider: React.FC<{
  children?: React.ReactChild | ((context: IVersions) => JSX.Element) // eslint-disable-line no-unused-vars
}> = (props) => {
  const {
    children,
  } = props;

  const [npmVersions, setNPMVersions] = useState<NPMVersions>({})
  const [githubVersions, setGithubVersions] = useState<GithubVersions>({})

  useEffect(() => {
    const doFetch = async () => {
      const allNPMVersions = await getAllNPMReleases();
      setNPMVersions(allNPMVersions);

      const allGithubVersions = await getAllGitHubReleases();
      setGithubVersions(allGithubVersions);
    }
    doFetch();
  }, [])

  const context = {
    npmVersions,
    githubVersions,
  }

  return (
    <VersionsContext.Provider value={context} >
      {typeof children === 'function' ? children(context) : children}
    </VersionsContext.Provider>
  );
};

export default VersionsProvider;
