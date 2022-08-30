import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const CSSGridReleases = () => (
  <Releases
    packageSlug="css-grid"
    packageLabel="CSS Grid"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/css-grid/releases.tsx`}
      metaTitle="CSS Grid Releases - Faceless UI"
      metaDescription="Version releases for the CSS Grid package."
    />
  )
};

CSSGridReleases.Layout = DocLayout;

export default CSSGridReleases;
