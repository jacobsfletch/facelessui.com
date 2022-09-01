import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const CollapsiblesReleases = () => (
  <Releases
    packageSlug="collapsibles"
    packageLabel="Collapsibles"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/collapsibles/releases.tsx`}
      metaTitle="Collapsibles Releases"
      metaDescription="Release history for the @faceless-ui/collapsibles npm module."
      metaURL="/docs/collapsibles/releases"
    />
  )
};

CollapsiblesReleases.Layout = DocLayout;

export default CollapsiblesReleases;
