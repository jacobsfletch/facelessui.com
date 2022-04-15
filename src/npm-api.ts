export type NPMDocument = {
  "dist-tags": {
    latest: string
  }
  "versions": {
    [version: string]: NPMDocument
  }
}

export const getNPMVersionNumber = async (packageName: string): Promise<string> => {
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


export const getAllVersionNumbers = async () => {
  const windowInfoVersion = await getNPMVersionNumber('window-info');
  const scrollInfoVersion = await getNPMVersionNumber('scroll-info');
  const mouseInfoVersion = await getNPMVersionNumber('mouse-info');
  const sliderVersion = await getNPMVersionNumber('slider');
  const cssGridVersion = await getNPMVersionNumber('css-grid');
  const modalVersion = await getNPMVersionNumber('modal');
  const collapsiblesVersion = await getNPMVersionNumber('collapsibles');
  const jumplistVersion = await getNPMVersionNumber('jumplist');

  return {
    windowInfo: windowInfoVersion,
    scrollInfo: scrollInfoVersion,
    mouseInfo: mouseInfoVersion,
    slider: sliderVersion,
    cssGrid: cssGridVersion,
    modal: modalVersion,
    collapsibles: collapsiblesVersion,
    jumplist: jumplistVersion,
  }
}
