export type NPMDocument = {
  name: string
  version: string
  main: string
  types: string
  repository: {
    type: string,
    url: string,
  }
  description: string,
  author: {
    email: string,
  }
  license: string,
  keywords: string[]
  scripts: {
    [key: string]: string
  }
  peerDependencies: {
    [key: string]: string
  }
  devDependencies: {
    [key: string]: string
  }
  gitHead: string
  bugs: {
    url: string
  }
  homepage: string
  _id: string
  _nodeVersion: string
  _npmVersion: string
  dist: {
    integrity: string
    shasum: string
    tarball: string
    fileCount: number
    unpackedSize: number
    signatures: [
      {
        keyid: string
        sig: string
      }
    ],
    "npm-signature": string
  }
  _npmUser: {
    name: string
    email: string
  },
  directories: {},
  maintainers: [
    {
      name: string
      email: string
    }
  ],
  _npmOperationalInternal: {
    host: string
    tmp: string
  }
  _hasShrinkwrap: boolean
}

export const getNPMVersion = async (packageName: string): Promise<NPMDocument> => {
  const res = await fetch(`https://registry.npmjs.org/@faceless-ui/${packageName}/latest`);
  const json = await res.json();

  const {
    error
  } = json;

  if (res.status === 200) {
    return json;
  }

  throw new Error(error);
};


export const getAllNPM = async () => {
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
    getNPMVersion('window-info'),
    getNPMVersion('scroll-info'),
    getNPMVersion('mouse-info'),
    getNPMVersion('slider'),
    getNPMVersion('css-grid'),
    getNPMVersion('modal'),
    getNPMVersion('collapsibles'),
    getNPMVersion('jumplist'),
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
