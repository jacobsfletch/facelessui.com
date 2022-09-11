import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const ScrollInfoReleases = () => (
  <Releases
    packageSlug="scroll-info"
    packageLabel="Scroll Info"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`/scroll-info/releases.tsx`}
      metaTitle="Scroll Info Releases"
      metaDescription="Release history for the @faceless-ui/scroll-info npm module."
      metaURL="/docs/scroll-info/releases"
    />
  )
};

ScrollInfoReleases.Layout = DocLayout;

export default ScrollInfoReleases;
