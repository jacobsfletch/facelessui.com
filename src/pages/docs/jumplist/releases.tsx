import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const JumplistReleases = () => (
  <Releases
    packageSlug="jumplist"
    packageLabel="Jumplist"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/jumplist/releases.tsx`}
      metaTitle="Jumplist Releases - Faceless UI"
      metaDescription="Version releases for the Jumplist package."
    />
  )
};

JumplistReleases.Layout = DocLayout;

export default JumplistReleases;
