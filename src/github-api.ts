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

export const getLatestGitHubRelease = async (repo: string): Promise<ReleaseData | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/repos/faceless-ui/${repo}/releases/latest`, {
      method: 'GET',
      headers: defaultHeaders
    });

    const json: ReleaseData = await res.json();

    if (res.status === 200) {
      return json;
    }
  } catch (e) {
    console.error(e);
  }
}

export type ReleaseData = {
  body?: string
  published_at: string // NOTE: date the release was created
  name: string
  tag_name: string
  slug: string
  url: string
  html_url: string
  node_id: string
  target_commitish: string
  draft: boolean
  prerelease: boolean
  created_at: string // NOTE: date of the commit used to create the release
  assets: any[]
  tarball_url: string
  zipball_url: string
}

export const getReleaseNotes = async (repo: string): Promise<ReleaseData[] | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/repos/faceless-ui/${repo}/releases`, {
      method: 'GET',
      headers: defaultHeaders
    });

    const json: ReleaseData[] = await res.json();

    if (res.status === 200) {
      return json.map((release) => ({
        ...release,
        slug: repo
      }));
    }
  } catch (e) {
    console.warn(e);
  }
}

