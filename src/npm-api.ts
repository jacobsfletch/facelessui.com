export type NPMDocument = {
  "dist-tags": {
    latest: string
  }
  "versions": {
    [version: string]: NPMDocument
  }
}

export const getNPMVersion = async (packageName: string): Promise<string> => {
  const res = await fetch(`https://registry.npmjs.org/@faceless-ui/${packageName}`);
  const json = await res.json();

  const {
    "dist-tags": {
      latest: latestVersion
    },
    error
  } = json;

  if (res.status === 200 && latestVersion) {
    return latestVersion;
  }

  throw new Error(error);
};


export const getAllVersions = async () => {
  const [
    windowInfoVersion,
    scrollInfoVersion,
    mouseInfoVersion,
    sliderVersion,
    cssGridVersion,
    modalVersion,
    collapsiblesVersion,
    jumplistVersion,
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
    'window-info': windowInfoVersion,
    'scroll-info': scrollInfoVersion,
    'mouse-info': mouseInfoVersion,
    slider: sliderVersion,
    'css-grid': cssGridVersion,
    modal: modalVersion,
    collapsibles: collapsiblesVersion,
    jumplist: jumplistVersion,
  }
}
