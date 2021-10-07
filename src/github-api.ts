export type GitHubTreeItem = {
  type: string,
  path: string,
}

export type GitHubTree = GitHubTreeItem[];

export type GitHubFile = {
  content: string,
  encoding: string,
  type: string,
  html_url: string // eslint-disable-line camelcase
}

export type GitHubJumplistItem = {
  label: string,
  path?: string,
  list?: GitHubJumplistItem[]
}

export type GitHubJumplist = GitHubJumplistItem[];

const defaultHeaders = {
  Accept: 'application/vnd.github.v3+json.html',
  Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
};

export const getGitHubMasterTree = async (repoName: string): Promise<GitHubTree> => {
  const res = await fetch(`https://api.github.com/repos/faceless-ui/${repoName}/git/trees/master?recursive=1`, {
    method: 'GET',
    headers: defaultHeaders,
  });

  const json = await res.json();

  const {
    message,
    tree,
  } = json;

  if (res.status === 200) {
    return tree;
  }

  // there is a rate limit on the GitHub API
  // 60 per hour for unauthenticated users
  // 5000 per hour for for when authenticating with access token
  // 403 is status code returns, if reached
  throw new Error(message);
};

export const getGitHubFile = async (fileName: string): Promise<GitHubFile> => {
  const res = await fetch(`https://api.github.com/repos/rhtml/docs/contents/${fileName}`, {
    method: 'GET',
    headers: defaultHeaders,
  });

  const json = await res.json();
  const { message } = json;

  if (res.status === 200) {
    return json;
  }

  throw new Error(message);
};

export const getGitHubVersionNumber = async (repo: string): Promise<string> => {
  const res = await fetch(`https://api.github.com/repos/faceless-ui/${repo}/releases/latest`, {
    method: 'GET',
    headers: defaultHeaders
  });

  const json = await res.json();
  const { message } = json;

  if (res.status === 200) {
    const { name } = json; // name of version
    return name;
  }

  console.warn(message);
  return 'Unreleased';
}
