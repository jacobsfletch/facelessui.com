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
      githubUrl={`/jumplist/releases.tsx`}
      metaTitle="Jumplist Releases"
      metaDescription="Release history for the @faceless-ui/jumplist npm module."
      metaURL="/docs/jumplist/releases"
    />
  )
};

JumplistReleases.Layout = DocLayout;

export default JumplistReleases;
