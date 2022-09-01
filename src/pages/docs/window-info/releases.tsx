import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const WindowInfoReleases = () => (
  <Releases
    packageSlug="window-info"
    packageLabel="Window Info"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/window-info/releases.tsx`}
      metaTitle="Window Info Releases"
      metaDescription="Release history of the @faceless-ui/window-info npm module."
      metaURL="/docs/window-info/releases"
    />
  )
};

WindowInfoReleases.Layout = DocLayout;

export default WindowInfoReleases;
