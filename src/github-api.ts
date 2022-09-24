export type GitHubRelease = {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: false
  },
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: []
  tarball_url: string
  zipball_url: string
  body: string
  mentions_count: number
  slug: string
}

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

export const getLatestGitHubRelease = async (repo: string): Promise<GitHubRelease | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/repos/faceless-ui/${repo}/releases/latest`, {
      method: 'GET',
      headers: defaultHeaders
    });

    const json: GitHubRelease = await res.json();

    if (res.status === 200) {
      return json;
    }
  } catch (e) {
    console.error(e);
  }
}

export const getAllGitHubReleases = async () => {
  const [
    windowInfo,
    scrollInfo,
    mouseInfo,
    slider,
    cssGrid,
    modal,
    collapsibles,
    jumplist,
  ] = await Promise.all([
    getLatestGitHubRelease('window-info'),
    getLatestGitHubRelease('scroll-info'),
    getLatestGitHubRelease('mouse-info'),
    getLatestGitHubRelease('slider'),
    getLatestGitHubRelease('css-grid'),
    getLatestGitHubRelease('modal'),
    getLatestGitHubRelease('collapsibles'),
    getLatestGitHubRelease('jumplist'),
  ])

  return {
    'window-info': windowInfo,
    'scroll-info': scrollInfo,
    'mouse-info': mouseInfo,
    slider,
    'css-grid': cssGrid,
    modal,
    collapsibles,
    jumplist,
  }
}

export const getReleaseNotes = async (repo: string): Promise<GitHubRelease[] | undefined> => {
  try {
    const res = await fetch(`https://api.github.com/repos/faceless-ui/${repo}/releases?per_page=10&page=1`, {
      method: 'GET',
      headers: defaultHeaders
    });

    const json: GitHubRelease[] = await res.json();

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

