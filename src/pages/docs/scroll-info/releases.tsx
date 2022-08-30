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
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/scroll-info/releases.tsx`}
      metaTitle="Scroll Info Releases - Faceless UI"
      metaDescription="Version releases for the Scroll Info package."
    />
  )
};

ScrollInfoReleases.Layout = DocLayout;

export default ScrollInfoReleases;
