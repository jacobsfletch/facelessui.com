import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const ModalReleases = () => (
  <Releases
    packageSlug="modal"
    packageLabel="Modal"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl="/modal/releases.tsx"
      metaTitle="Modal Releases"
      metaDescription="Release history for the @faceless-ui/modal npm module."
      metaURL="/docs/modal/releases"
    />
  )
};

ModalReleases.Layout = DocLayout;

export default ModalReleases;
