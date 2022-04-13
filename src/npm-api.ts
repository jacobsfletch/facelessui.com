export type NPMDocument = {
  "dist-tags": {
    latest: string
  }
  "versions": {
    [version: string]: NPMDocument
  }
}

export const getNPMVersionNumber = async (packageName: string): Promise<NPMDocument> => {
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
