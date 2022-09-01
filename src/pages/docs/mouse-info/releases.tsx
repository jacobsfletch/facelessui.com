import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const MouseInfoReleases = () => (
  <Releases
    packageSlug="mouse-info"
    packageLabel="Mouse Info"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/mouse-info/releases.tsx`}
      metaTitle="Mouse Info Releases"
      metaDescription="Release history for the @faceless-ui/mouse-info npm module."
      metaURL="/docs/mouse-info/releases"
    />
  )
};

MouseInfoReleases.Layout = DocLayout;

export default MouseInfoReleases;
